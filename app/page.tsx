// app/page.tsx
import React from "react";

export default function Page() {
  return (
    <main className="min-h-screen bg-gray-50 text-gray-900">
      {/* NAVBAR (simple) */}
      <header className="w-full py-6 px-6 sm:px-12 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-purple-600 flex items-center justify-center text-white font-bold">F</div>
          <div>
            <div className="text-lg font-semibold">Future Brand</div>
            <div className="text-xs text-gray-500">Powered by AI</div>
          </div>
        </div>
        <nav className="hidden md:flex gap-6 items-center text-sm">
          <a href="/" className="hover:underline">Home</a>
          <a href="/about" className="hover:underline">About</a>
          <a href="/products" className="hover:underline">Products</a>
          <a href="/contact" className="hover:underline">Contact</a>
          <button className="ml-4 bg-gray-900 text-white px-4 py-2 rounded-lg">Get Started</button>
        </nav>
      </header>

      {/* HERO */}
      <section className="px-6 sm:px-12 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center pt-8 pb-16">
        <div>
          <h1 className="text-5xl sm:text-6xl font-extrabold leading-tight">
            Redefining the <span className="text-purple-600">Future</span> of <br />
            AI-Powered <span className="text-purple-600">Design</span>
          </h1>
          <p className="text-gray-600 mt-6 max-w-xl">
            Experience cutting-edge design solutions that blend artificial intelligence with human creativity. We create digital experiences that inspire, engage, and transform your brand.
          </p>

          <div className="mt-8 flex gap-4 items-center">
            <a href="/contact" className="bg-gray-900 text-white px-6 py-3 rounded-lg shadow hover:shadow-lg">Get Started Today</a>
            <button className="text-gray-700 px-4 py-2 flex items-center gap-2 hover:underline">▶ Watch Demo</button>
          </div>

          {/* features */}
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="flex items-start gap-3">
              <div className="bg-white p-3 rounded shadow">🔮</div>
              <div>
                <div className="font-semibold">AI-Powered</div>
                <div className="text-sm text-gray-500">Smart Design</div>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="bg-white p-3 rounded shadow">⚡</div>
              <div>
                <div className="font-semibold">Lightning Fast</div>
                <div className="text-sm text-gray-500">Quick Results</div>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="bg-white p-3 rounded shadow">🚀</div>
              <div>
                <div className="font-semibold">Future Ready</div>
                <div className="text-sm text-gray-500">Innovation</div>
              </div>
            </div>
          </div>
        </div>

        {/* illustration / mock card */}
        <div className="flex items-center justify-center">
          <div className="w-full max-w-md bg-white rounded-2xl p-6 shadow-lg">
            <div className="h-40 bg-gradient-to-br from-purple-100 to-indigo-50 rounded mb-4 flex items-center justify-center">
              <span className="text-2xl text-purple-700">AI Studio Preview</span>
            </div>
            <div className="grid grid-cols-2 gap-3">
              <div className="h-20 bg-gray-100 rounded flex items-center justify-center text-gray-500">Preview</div>
              <div className="h-20 bg-purple-100 rounded flex items-center justify-center text-purple-700">Tool</div>
              <div className="h-20 bg-gray-100 rounded flex items-center justify-center text-gray-500">Assets</div>
              <div className="h-20 bg-purple-100 rounded flex items-center justify-center text-purple-700">Generate</div>
            </div>
          </div>
        </div>
      </section>

      {/* footer */}
      <footer className="bg-white border-t py-8 px-6 sm:px-12">
        <div className="max-w-6xl mx-auto text-sm text-gray-600 flex flex-col md:flex-row items-center justify-between gap-4">
          <div>© {new Date().getFullYear()} Future Brand — AI-powered design</div>
          <div className="flex gap-4">
            <a href="#" className="hover:underline">Privacy</a>
            <a href="#" className="hover:underline">Terms</a>
            <a href="/contact" className="hover:underline">Contact</a>
          </div>
        </div>
      </footer>
    </main>
  );
}