"use client"


import { useInView } from 'react-intersection-observer';
import Section_banner from './ui/sections/section-banner';
import Section_presentation from './ui/sections/section-presentation';
import Section_cta from './ui/sections/section-cta';
import Section_modules from './ui/sections/section-modules';
import Section_other_functions from './ui/sections/section-others-functions';
import Section_contact from './ui/sections/section-contact';

export default function Home() {

  const { ref, inView, entry } = useInView();

  return (
    <>
      <Section_banner />

      <Section_presentation />

      <Section_cta />

      <Section_modules />

      <Section_other_functions />

      <Section_contact />
    </>
  );
}
