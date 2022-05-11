import AdviceCard from "../components/card/AdviceCard";
import { AdviceProvider } from "../context/adviceContext";

export default function Home({ id, advice }) {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-800">
      <AdviceProvider>
        <AdviceCard id={id} firstAdvice={advice} />
      </AdviceProvider>

    </div>
  )
}
export async function getServerSideProps() {
  try {
    const res = await fetch('https://api.adviceslip.com/advice');
    const data = await res.json();
    return {
      props: {
        id: data.slip.id,
        advice: data.slip.advice
      }
    }
  }
  catch (error) {
    console.log(error)
  }

}

