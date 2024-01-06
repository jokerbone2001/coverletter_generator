import Image from 'next/image'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24 space-y-8">
      <h1 className="text-4xl font-bold">Welcome to our website!</h1>
      <a href="/coverletter-generator">
        <p className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Go to Cover Letter Generator
        </p>
      </a>
    </main>
  )
}
