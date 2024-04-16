import React from "react";
import { Helmet } from "react-helmet-async";

const AboutUs = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      <Helmet>
        <title>MyBali-About-Us</title>
      </Helmet>
      <div className="container mx-auto py-12">
        <div className="max-w-5xl mx-auto bg-white rounded-lg shadow-md p-8">
          <h2 className="text-2xl font-bold bg-[#00AFC6] text-white p-1 mb-6">
            About Us
          </h2>
          <p className="text-lg mb-6">
            As part of the iconic Flight Centre Travel Group, My Bali has over
            40 years of travel experience behind us. We’re a passionate team of
            wander-lusting travellers, so we’ve tried and tested our
            destinations to ensure you’re getting the best of the best.
          </p>
          <p className="text-lg mb-6">
            Proudly IATA accredited, you can relax knowing your future travels
            are safe with our My Bali Experts. Our Experts are stationed in
            Queensland, Australia, a stone’s throw from beautiful Bali. You can
            be certain the Expert you’re talking to has experienced Bali
            firsthand, from the luxe to the raw, and will help you plan the
            ultimate Balinese escape, brimming with Bonus Value, that you’ll
            never forget.
          </p>
          <p className="text-lg mb-6">
            Renowned for being the original “Holiday in a Box” My Bali offers
            the done-for-you Bali holiday of your dreams.
          </p>
          <h2 className="text-2xl font-bold mb-6 bg-[#00AFC6] text-white p-1">
            Our Difference
          </h2>
          <p className="text-lg mb-6">
            Whether you love luxury moments, off-beat adventures, or family
            escapes, My Bali has the ideal holiday for you. So, what do we do
            differently?
          </p>
          <p className="text-lg mb-6">
            We create perfectly packaged holidays and do all the thinking for
            you. That includes flights, transfers, room upgrades, and more.
            Coordinating your holiday is our speciality. Our done-for-you
            packages are collated to give you the experience of a lifetime –
            effortlessly.
          </p>
          <p className="text-lg mb-6">
            Our Bonus Value and Exclusive Inclusions make your holiday one to
            remember. Our holidays are full of experiences you wouldn’t have
            otherwise. You’ll think of My Bali multiple times on your holiday
            when you are having exceptional upgrades, experiences, adventures,
            cultural immersion, and cuisine – all included in your package!
          </p>
          <p className="text-lg mb-6">
            We offer unique experiences and packages you won’t see anywhere
            else. We scour the Earth to bring you moments you’ll be talking
            about for years to come.
          </p>
          <p className="text-lg mb-6">
            The simplicity of booking and planning a holiday has never been
            easier. Our mission is to ensure everything is done for you. Simply
            arrive and holiday.
          </p>
          <p className="text-lg mb-6">
            Consider us the authority on heavenly, unforgettable Bali holidays.
            We’ve spent decades building strong and trusted partnerships to
            bring you the best of the best resorts and experiences. We know Bali
            and we’ve tried and tested every resort and experience that we offer
            so you can trust our stamp of approval. If we wouldn’t do it, we
            won’t package it.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
