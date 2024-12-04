import React from 'react'

export default function About() {
    return (
        <div className="py-16 bg-white" style={{marginTop:90}}>
            <div className="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
                <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
                    <div className="md:5/12 lg:w-5/12">
                        <img
                            src="https://i.ibb.co/5BCcDYB/Remote2.png"
                            alt="image"
                        />
                    </div>
                    <div className="md:7/12 lg:w-6/12">
                        <h2 className="text-2xl text-gray-900 font-bold md:text-4xl">
                        VidyaGxP: Streamlining GxP Compliance for Global Pharma
                        </h2>
                        <p className="mt-6 text-gray-600">
                        VidyaGxP earlier known as MSGMP Compliance & Pharma Solutions is a leading global provider
                         of GxP software solutions, empowering pharmaceutical and life sciences companies to achieve
                          and maintain compliance efficiently. With a deep understanding of GxP regulations and industry best practices!
                        </p>
                        <p className="mt-4 text-gray-600">
                        we offer a comprehensive suite of software solutions designed to streamline
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
  }