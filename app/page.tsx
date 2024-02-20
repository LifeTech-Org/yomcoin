"use client"
import { gsap } from "gsap";
import Image from "next/image";
import { useEffect } from "react";
import { socials } from "./utils/data";
import Link from "next/link";

export default function Home() {
  useEffect(() => {
    gsap.set(".pop", {
      opacity: 0,
    })
    gsap.to(".pop", {
      opacity: 1,
      duration: 2,
      ease: "circ.in"
    });
    gsap.set(".fade", {
      opacity: 0,
      y: 100,
    })
    gsap.to(".fade", {
      opacity: 1,
      duration: 0.7,
      y: 0,
      delay: 2,
      ease: "bounce.out"
    });
    gsap.set(".footer", {
      opacity: 0,
    })
    gsap.to(".footer", {
      opacity: 1,
      duration: 0.7,
      delay: 3,
      ease: "power1.out"
    });
    gsap.to(".spin", {
      rotation: 360,
      repeat: 1,
      delay: 3,
      yoyo: true,
      stagger: 0.7,
      duration: 0.7,
      ease: "back.in"
    });
  }, []);
  const display = "WE ARE ALMOST READY!!!";
  return (
    <main className="flex flex-col-reverse md:flex-row min-h-screen relative">
      <section className="min-h-screen flex-1 flex items-center justify-center">
        <div className="min-h-60 w-[70%] relative rounded-lg ring-4 ring-purple-950 rotate-90">
          <Image src="/phone.jpg" layout="fill" alt="processing" className="rounded-xl" />
        </div>
      </section>
      <section className="flex flex-1 min-h-screen flex-col justify-center gap-3 px-8 ">
        <Image src="/logo.png" alt="logo" height={80} width={80} />
        <h3 className="text-5xl pop text-purple-950 font-bold mt-4">
          {/* {display.split("").map((_t, index) => {
            return <div key={index} className="bouncer inline-flex ">{_t}</div>
          })} */}
          {display}
        </h3>
        <q className="text-2xl mt-6 fade font-semibold text-pink-600 w-full md:max-w-96 border-l-8 border-pink-800 uppercase px-4">Experience Greateness with us at YOMCOIN. We are coming loaded!</q>
        <footer className="footer mt-8" >
          <p className="text-xs font-bold uppercase text-purple-950">Got any question? Reach us here!</p>
          <ul className="flex gap-2 mt-4">
            {
              socials.map(({ link, Icon }, index) => <li key={index} className="spin"><Link href={link}><Icon size={45} className="text-purple-950 hover:scale-90" /></Link></li>)
            }
          </ul>
        </footer>
      </section>
    </main>
  );
}
