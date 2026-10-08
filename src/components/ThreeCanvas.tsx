import { useEffect, useRef, useState } from 'react'
import * as THREE from 'three'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'
import { Sparkles } from 'lucide-react'

interface ThreeCanvasProps {
  modelPath?: string
  className?: string
}

export default function ThreeCanvas({
  modelPath = '/models/instalacja.glb',
  className = '',
}: ThreeCanvasProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const [loading, setLoading] = useState(true)
  const [loadPercent, setLoadPercent] = useState(0)

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    setLoading(true)
    setLoadPercent(0)

    // Inicjalizacja sceny, kamery i renderera Three.js
    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(
      40,
      container.clientWidth / container.clientHeight,
      0.1,
      1000
    )
    camera.position.set(4.0, 1.6, 4.8)

    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
      powerPreference: 'high-performance',
    })
    renderer.setSize(container.clientWidth, container.clientHeight)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    renderer.shadowMap.enabled = true
    renderer.shadowMap.type = THREE.PCFSoftShadowMap
    renderer.toneMapping = THREE.ACESFilmicToneMapping
    renderer.toneMappingExposure = 1.15
    container.innerHTML = ''
    container.appendChild(renderer.domElement)

    // Kontrola kamery (OrbitControls) - wyłączony zoom / powiększanie
    const controls = new OrbitControls(camera, renderer.domElement)
    controls.enableDamping = true
    controls.dampingFactor = 0.05
    controls.enableZoom = false // Zakaz powiększania / pomniejszania (brak zoomu na scroll / pinch)
    controls.enablePan = false
    controls.target.set(0, 0, 0)
    controls.maxPolarAngle = Math.PI / 2 + 0.1

    // Oświetlenie studyjne dopasowane do materiałów przemysłowych
    const ambientLight = new THREE.AmbientLight(0xffffff, 1.5)
    scene.add(ambientLight)

    const mainLight = new THREE.DirectionalLight(0xfff6ea, 2.6)
    mainLight.position.set(6, 10, 6)
    mainLight.castShadow = true
    scene.add(mainLight)

    const fillLight = new THREE.DirectionalLight(0xd0e8f2, 1.4)
    fillLight.position.set(-6, -2, -6)
    scene.add(fillLight)

    const goldAccentLight = new THREE.PointLight(0xfbba00, 2.5, 10)
    goldAccentLight.position.set(0, 2.5, 2.5)
    scene.add(goldAccentLight)

    // Pływające cząsteczki energii (Dynamic Energy Particles)
    const particleCount = 80
    const particleGeometry = new THREE.BufferGeometry()
    const particlePositions = new Float32Array(particleCount * 3)
    const particleVelocities: { x: number; y: number; z: number }[] = []

    for (let i = 0; i < particleCount; i++) {
      particlePositions[i * 3] = (Math.random() - 0.5) * 5.2
      particlePositions[i * 3 + 1] = (Math.random() - 0.5) * 4.2
      particlePositions[i * 3 + 2] = (Math.random() - 0.5) * 5.2
      particleVelocities.push({
        x: (Math.random() - 0.5) * 0.003,
        y: Math.random() * 0.005 + 0.002,
        z: (Math.random() - 0.5) * 0.003,
      })
    }
    particleGeometry.setAttribute('position', new THREE.BufferAttribute(particlePositions, 3))

    const particleMaterial = new THREE.PointsMaterial({
      color: 0xfbba00,
      size: 0.045,
      transparent: true,
      opacity: 0.75,
      blending: THREE.AdditiveBlending,
    })
    const particleSystem = new THREE.Points(particleGeometry, particleMaterial)
    scene.add(particleSystem)

    // Pivot group gwarantujący idealne wycentrowanie modelu w punkcie (0, 0, 0)
    const pivotGroup = new THREE.Group()
    scene.add(pivotGroup)

    // Ładowanie modułu glTF / glb
    const loader = new GLTFLoader()

    loader.load(
      modelPath,
      (gltf) => {
        const rawModel = gltf.scene

        // Wykrywanie orientacji CAD Z-up i automatyczne prostowanie
        const rawBox = new THREE.Box3().setFromObject(rawModel)
        const rawSize = new THREE.Vector3()
        rawBox.getSize(rawSize)
        if (rawSize.z > rawSize.y) {
          rawModel.rotation.x = -Math.PI / 2
        }
        rawModel.updateMatrixWorld(true)

        // Wycentrowanie i dopasowanie skali modułu
        const box = new THREE.Box3().setFromObject(rawModel)
        const size = new THREE.Vector3()
        box.getSize(size)
        const center = new THREE.Vector3()
        box.getCenter(center)

        const maxDim = Math.max(size.x, size.y, size.z)
        const scale = 2.7 / maxDim
        rawModel.scale.setScalar(scale)

        // Precyzyjne wyśrodkowanie wewnątrz pivotGroup — środek geometryczny DOKŁADNIE w (0, 0, 0)
        rawModel.position.set(-center.x * scale, -center.y * scale, -center.z * scale)

        pivotGroup.add(rawModel)
        setLoading(false)
      },
      (xhr) => {
        if (xhr.total > 0) {
          setLoadPercent(Math.round((xhr.loaded / xhr.total) * 100))
        }
      },
      (error) => {
        console.error('Three.js load error:', error)
        setLoading(false)
      }
    )

    // Obsługa paralaksy myszki
    let mouseX = 0
    let mouseY = 0
    const onMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect()
      mouseX = ((e.clientX - rect.left) / rect.width - 0.5) * 0.4
      mouseY = ((e.clientY - rect.top) / rect.height - 0.5) * 0.4
    }
    window.addEventListener('mousemove', onMouseMove)

    // Pętla animacji (Render Loop)
    let animationFrameId: number
    const animate = () => {
      animationFrameId = requestAnimationFrame(animate)

      // Płynny, perfekcyjnie wycentrowany obrót modułu wokół własnej osi Y w punkcie (0,0,0)
      pivotGroup.rotation.y += 0.003
      // Subtelny parallax 3D za kursorem
      pivotGroup.rotation.x = THREE.MathUtils.lerp(pivotGroup.rotation.x, mouseY * 0.15, 0.05)
      pivotGroup.rotation.z = THREE.MathUtils.lerp(pivotGroup.rotation.z, -mouseX * 0.15, 0.05)

      // Animacja unoszących się cząsteczek energii
      const positions = particleGeometry.attributes.position.array as Float32Array
      for (let i = 0; i < particleCount; i++) {
        positions[i * 3 + 1] += particleVelocities[i].y
        if (positions[i * 3 + 1] > 2.5) {
          positions[i * 3 + 1] = -2.2
        }
      }
      particleGeometry.attributes.position.needsUpdate = true

      controls.update()
      renderer.render(scene, camera)
    }
    animate()

    // Obsługa zmiany rozmiaru kontenera
    const onResize = () => {
      if (!container) return
      camera.aspect = container.clientWidth / container.clientHeight
      camera.updateProjectionMatrix()
      renderer.setSize(container.clientWidth, container.clientHeight)
    }
    const resizeObserver = new ResizeObserver(onResize)
    resizeObserver.observe(container)

    // Sprzątanie po odmontowaniu
    return () => {
      cancelAnimationFrame(animationFrameId)
      window.removeEventListener('mousemove', onMouseMove)
      resizeObserver.disconnect()
      renderer.dispose()
      particleGeometry.dispose()
      particleMaterial.dispose()
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement)
      }
    }
  }, [modelPath])

  return (
    <div className={`relative h-full w-full ${className}`}>
      {/* Kontener canvas Three.js */}
      <div ref={containerRef} className="h-full w-full cursor-grab active:cursor-grabbing outline-none" />

      {/* Czysty loader */}
      {loading && (
        <div className="pointer-events-none absolute inset-0 flex flex-col items-center justify-center bg-transparent backdrop-blur-xs">
          <div className="relative flex items-center justify-center">
            <div className="h-12 w-12 animate-spin rounded-full border-2 border-slate-300 border-t-[#fbba00]" />
            <Sparkles className="absolute h-5 w-5 text-[#fbba00]" />
          </div>
          <span className="mt-2 text-xs font-semibold text-slate-600">
            Wczytywanie modułu... {loadPercent}%
          </span>
        </div>
      )}
    </div>
  )
}
