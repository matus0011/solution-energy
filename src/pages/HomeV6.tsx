import HomeV5 from '@/pages/HomeV5'

// Układ V5: V4 bez przejścia na zielony. Logo i akcenty zostają żółte na całej stronie.
export default function HomeV6() {
  return <HomeV5 decarb={false} />
}
