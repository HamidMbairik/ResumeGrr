import { useEffect, useState } from "react"

const CounterSection = () => {
  const [count, setCount] = useState(0)
  const [target, setTarget] = useState(0)

  useEffect(() => {
    // Pick a random number between 1200 and 1500 when component mounts
    const randomTarget = Math.floor(Math.random() * (2500 - 1200 + 1)) + 1200
    setTarget(randomTarget)

    let current = 0
    const increment = Math.ceil(randomTarget / 100) // speed (100 steps)

    const interval = setInterval(() => {
      current += increment
      if (current >= randomTarget) {
        current = randomTarget
        clearInterval(interval) // ✅ stop once target is reached
      }
      setCount(current)
    }, 30) // update speed (30ms per step)

    return () => clearInterval(interval)
  }, [])

  return (
    <section
      style={{
        width: "100%",
        background: "linear-gradient(90deg, #2563eb, #4f46e5)",
        color: "white",
        padding: "2rem 0",
        textAlign: "center",
        boxShadow: "inset 0 8px 16px rgba(0,0,0,0.2), inset 0 -8px 16px rgba(0,0,0,0.2)",
      }}
    >
      <h2
        style={{
          fontSize: "3rem",
          fontWeight: "bold",
          fontFamily: "Inter, sans-serif",
          marginBottom: "0.5rem",
        }}
      >
        {count.toLocaleString()}
      </h2>
      <p style={{ fontSize: "1.25rem", fontFamily: "Inter, sans-serif" }}>
        Resumes Created Today
      </p>
    </section>
  )
}

export default CounterSection
