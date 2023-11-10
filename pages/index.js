'use client';

import { Footer, Navbar } from '../components';
import { About, Explore, Feedback, GetStarted, Hero } from '../sections';
import Contact from '../sections/Contact.jsx';

const Page = () => (
  <div className="bg-slate-700 overflow-hidden">
    <Navbar />
    <Hero />
    <div className="relative">
      <GetStarted />
      <div className="gradient-03 z-0" />
      <About />
    </div>
    <div className="relative">
      <Explore />
    </div>
    <div className="relative">
      <div className="gradient-04 z-0" />
      <Feedback />
      <Contact />
    </div>
    <Footer />
  </div>
);

export default Page;
