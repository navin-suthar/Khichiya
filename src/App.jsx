import { useState } from 'react'
import { Routes, Route, Navigate, Link } from 'react-router-dom'
import heroImg from './assets/main.jpeg'
import fooderyspices from './assets/foodery-spices.jpg'
import greenchilli from './assets/green-chilli-khichiya-papad-500x500.webp'
import khichiyaChuri from './assets/khichiya-churi.jpg'
import khichiyaMsala from './assets/khichiya-msala.jpg'
import khichiyaPapad from './assets/khichiya-msala.jpg'

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />} />
      <Route path="/*" element={<MainLayout />} />
    </Routes>
  )
}

function MainLayout() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Navbar />
      <main className="flex-1">
        <Routes>
          <Route index element={<Khichiya />} />
          <Route path="khichiya" element={<Khichiya />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
      </div>
  )
}

function Navbar() {
  const [open, setOpen] = useState(false)
  return (
    <header className="sticky top-0 z-30 bg-white/80 backdrop-blur border-b border-gray-100">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <Link to="/" className="inline-flex items-center gap-2 text-xl font-semibold text-gray-900">
          <img src={fooderyspices} alt="Khichiya" className="h-6 w-6 rounded" />
          Khichiya
        </Link>
        <nav className="hidden md:flex items-center gap-6 text-gray-700">
          <Link className="hover:text-gray-900" to="/">Khichiya</Link>
        </nav>
        <button
          aria-label="Toggle menu"
          className="md:hidden inline-flex items-center justify-center h-10 w-10 rounded-lg border border-gray-200 text-gray-700 hover:bg-gray-50"
          onClick={() => setOpen((v) => !v)}
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="h-5 w-5">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
      {open && (
        <div className="md:hidden border-t border-gray-100 bg-white">
          <div className="px-4 py-3">
            <Link onClick={() => setOpen(false)} className="block py-2 text-gray-800 hover:text-gray-900" to="/">Khichiya</Link>
          </div>
        </div>
      )}
    </header>
  )
}

function Footer() {
  return (
    <footer className="border-t border-gray-100 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8 text-sm text-gray-500 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p>© {new Date().getFullYear()} Khichiya. All rights reserved.</p>
        <div className="flex items-center gap-4">
          <Link className="hover:text-gray-700" to="/privacy">Privacy</Link>
          <Link className="hover:text-gray-700" to="/terms">Terms</Link>
        </div>
      </div>
    </footer>
  )
}
// Removed other pages

function Section({ title, subtitle, children }) {
  return (
    <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
      <div className="max-w-2xl mb-10">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900">{title}</h2>
        {subtitle && <p className="mt-3 text-gray-600">{subtitle}</p>}
      </div>
      {children}
    </section>
  )
}

// Removed About, Services, Portfolio, Contact

function Khichiya() {
  return (
    <>
      <section className="relative overflow-hidden bg-gradient-to-b from-orange-50 to-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-gray-900">Khichiya (Rice Papad)</h1>
            <p className="mt-4 text-lg text-gray-700">Khichiya, or khichiya papad, is a traditional Indian snack made primarily from rice flour. Known for its crispy texture and mild flavor, it’s often seasoned with cumin and green chili, then sun-dried and cooked by frying or roasting.</p>
            <p className="mt-4 rounded-xl bg-orange-50/80 ring-1 ring-orange-200/70 p-4 text-gray-800 leading-relaxed shadow-sm">
              <span className="font-semibold text-orange-800">For many Marwadi homes,</span> the smell of roasting khichiya means family gathering in the courtyard, winter sun on the terrace, and stories from elders. <span className="font-medium">Every puff and crackle</span> reminds us of hands that patiently rolled, dried, and saved these for festivals and guests. <span className="font-semibold">It’s not just a snack</span>—it’s a warm memory of home.
            </p>
            <div className="mt-6 flex items-center gap-3">
              <a href="#marwadi" className="inline-flex items-center justify-center px-4 py-2 rounded-lg border border-orange-300 text-orange-700 hover:bg-orange-50">Read in Marwadi (मारवाड़ी)</a>
            </div>
            <div className="mt-6 grid sm:grid-cols-2 gap-4">
              <div className="rounded-xl border border-gray-200 bg-white p-5">
                <h3 className="font-semibold text-gray-900">What is Khichiya?</h3>
                <ul className="mt-2 list-disc pl-5 text-gray-700 space-y-1">
                  <li><span className="font-medium">Rice-based papad:</span> Made from rice flour (unlike pulse-based papads).</li>
                  <li><span className="font-medium">Ductile dough:</span> Named from Hindi “khinch” (to pull); flexible dough.</li>
                  <li><span className="font-medium">Mildly spiced:</span> Usually cumin, sometimes green chilies.</li>
                </ul>
              </div>
              <div className="rounded-xl border border-gray-200 bg-white p-5">
                <h3 className="font-semibold text-gray-900">How is it eaten?</h3>
                <ul className="mt-2 list-disc pl-5 text-gray-700 space-y-1">
                  <li><span className="font-medium">Side dish:</span> With dal-chawal, rasam-rice, etc.</li>
                  <li><span className="font-medium">Snack:</span> Crunchy on its own.</li>
                  <li><span className="font-medium">Toppings:</span> Masala khichiya with onion, tomato, chutneys.</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="relative">
            <img src={heroImg} alt="Khichiya papad" className="w-full rounded-2xl object-cover aspect-[4/3] border border-orange-200 shadow" />
          </div>
        </div>
      </section>
      <Section title="मारवाड़ी में" subtitle="Khichiya — घर की गर्म याद">
        <div id="marwadi" className="prose max-w-none">
          <p>खिचिया पापड़ बस कुरकुरो स्वाद ही नांई, घर-आंगणाँ री याद है। घाम्ली सर्दीयाँ में छत पर सुखेला पापड़, रसोई में जीराँ री खुशबू, अने बापूसाँ री गप्पा — हर बाइट म्हां घर रा स्वाद आवे। मेहमान आवे तो पहिलूँ खिचिया, अने त्यौहार आवे तो थाळी में खिचिया जरूर।</p>
        </div>
      </Section>
      <Section title="Preparation" subtitle="From dough to crispy goodness.">
        <ol className="list-decimal pl-6 text-gray-700 space-y-2">
          <li><span className="font-medium">Dough:</span> Rice flour with spices is kneaded to a smooth, ductile mass.</li>
          <li><span className="font-medium">Shaping:</span> Rolled or pressed into thin rounds.</li>
          <li><span className="font-medium">Drying:</span> Sun-dried until firm and moisture-free.</li>
          <li><span className="font-medium">Cooking:</span> Fried or roasted until puffed and crisp.</li>
        </ol>
        <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            { src: khichiyaPapad, caption: 'Plain Khichiya Papad' },
            { src: greenchilli, caption: 'Kacchi Kairi Khichiya Masala Papad🥭😍' },
            { src: khichiyaChuri, caption: 'Khichiya Churi' },
            { src: khichiyaMsala, caption: 'Masala Khichiya' },
          ].map((card) => (
            <figure key={card.caption} className="overflow-hidden rounded-xl border border-orange-200 bg-white shadow-sm">
              <img src={card.src} alt={card.caption} className="aspect-square w-full object-cover" />
              <figcaption className="px-3 py-2 text-sm text-gray-700">{card.caption}</figcaption>
            </figure>
          ))}
        </div>
      </Section>
      <Section title="Featured Product" subtitle="Rajasthan Special Rice Khichiya Papad - Homemade Ready to Fry (400g)">
        <div className="grid md:grid-cols-2 gap-6 items-center">
          <div className="order-2 md:order-1">
            <h3 className="text-xl font-semibold text-gray-900">Foodery Spices</h3>
            <ul className="mt-3 list-disc pl-5 text-gray-700 space-y-1">
              <li>Authentic rice-based khichiya papad from Rajasthan.</li>
              <li>Homemade style, ready-to-fry fryums.</li>
              <li>Crispy texture, mildly spiced—great for snacks or sides.</li>
              <li>Net weight: 400g.</li>
            </ul>
            <div className="mt-5 flex items-center gap-3">
              <button className="inline-flex items-center justify-center px-5 py-3 rounded-lg bg-orange-600 text-white hover:bg-orange-700">Add to cart</button>
              <Link to="/contact" className="inline-flex items-center justify-center px-5 py-3 rounded-lg border border-orange-300 text-orange-700 hover:bg-orange-50">Bulk inquiry</Link>
            </div>
          </div>
          <div className="order-1 md:order-2">
            <img src={fooderyspices} alt="Foodery Spices - Rajasthan Special Rice Khichiya Papad 400g" className="w-full rounded-xl object-cover aspect-square border border-orange-200 shadow" />
          </div>
        </div>
      </Section>
      <Section>
        <div className="bg-orange-600 text-white rounded-2xl p-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-2xl font-semibold">Craving masala khichiya?</h3>
            <p className="text-orange-100 mt-1">Top with chopped onion, tomato, coriander, sev, and chutneys.</p>
          </div>
          <Link to="/contact" className="inline-flex items-center justify-center px-5 py-3 rounded-lg bg-white text-orange-700 hover:bg-orange-50">Get in touch</Link>
        </div>
      </Section>
    </>
  )}

function NotFound() {
  return (
    <Section title="Page not found">
      <Link to="/" className="text-indigo-600 hover:text-indigo-700">Go back home</Link>
    </Section>
  )
}

export default App
