import { BlogPosts } from 'app/components/posts'
import Image from 'next/image'

export default function Page() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
        Balázs Otakomaiya
      </h1>
      
      <div className="flex flex-col md:flex-row gap-8 mb-8 items-start">
        <Image
          src="/avatar.jpg"
          alt="Balázs Otakomaiya"
          width={200}
          height={200}
          className="rounded-2xl md:rounded-full"
          priority
        />
        <div className="flex-1">
          <p className="mb-4">
            Hey, I'm Balázs. I love building beautiful, user-experience-focused digital experiences. 
            I've Co-Founded a successful Men's Jewellery Brand called <a href="https://ezzra.com" target="_blank" rel="noopener noreferrer" className="underline">EZZRA</a> all 
            the whilst working on some exciting projects as a Software Engineer over at Typeform, 
            Booking.com, PokerStars and more.
          </p>
          <p className="mb-4">
            Currently building a cross-platform (iOS, Android, Web) retail investment app at OTP Bank with Flutter.
          </p>
          <div className="flex gap-4 flex-wrap">
            <a href="https://www.linkedin.com/in/heyitsbalazs/" target="_blank" rel="noopener noreferrer" className="underline">LinkedIn</a>
            <a href="mailto:balazs@otakomaiya.com" className="underline">Contact</a>
          </div>
        </div>
      </div>

      <div className="my-8">
        <h2 className="font-semibold text-xl mb-4 tracking-tighter">Recent Posts</h2>
        <BlogPosts />
      </div>

      <div className="mb-8">
        <h2 className="font-semibold text-xl mb-4 tracking-tighter">Meet my toolbox</h2>
        <p className="mb-4">
          Building a digital product is an eloquent dance between making sound, long-term engineering 
          decisions and shipping fast, failing fast, and subsequently finding your product-market fit.
        </p>
        <p className="mb-4">
          Having fallen in love with <strong>React</strong> & <strong>TypeScript</strong>, I've been using them to create 
          beautiful, performant, and scalable web applications for the past 6 years, out of my 8 years of 
          professional coding experience.
        </p>
        <p className="mb-4">
          Most recently, I've had the opportunity to deep-dive into building cross-platform apps 
          with <strong>Flutter</strong> in a large-scale, enterprise project for the largest bank in Hungary.
        </p>
      </div>

      <div className="mb-8">
        <h2 className="font-semibold text-xl mb-4 tracking-tighter">My Career</h2>
        <p className="mb-4">
          I've been fortunate enough to work with some of the most talented people in the industry, on 
          some truly exciting projects.
        </p>
        <p className="mb-4">
          Over at <a href="https://typeform.com" target="_blank" rel="noopener noreferrer" className="underline">Typeform</a>, 
          I've been working on their brand new marketing automation tool – much like, say, Ortto or ActiveCampaign 
          in a small, tight-knit team.
        </p>
        <p className="mb-4">
          <a href="https://booking.com" target="_blank" rel="noopener noreferrer" className="underline">Booking.com</a> was 
          a completely different experience, working on a large-scale enterprise product, truly gaining understanding 
          of the importance of engineering concepts that span beyond code quality, such as scalability, performance, 
          accessibility, and observability.
        </p>
        <p className="mb-4">
          <a href="https://www.deptagency.com/" target="_blank" rel="noopener noreferrer" className="underline">DEPT</a>, 
          a global digital agency, was where I've had the opportunity to work on a wide variety of projects, 
          including <a href="https://www.ascot.com/" target="_blank" rel="noopener noreferrer" className="underline">Royal Ascot</a>, 
          <a href="https://totum.com/" target="_blank" rel="noopener noreferrer" className="underline"> TOTUM</a>, 
          <a href="https://steamforged.com" target="_blank" rel="noopener noreferrer" className="underline"> SteamForged</a>, 
          <a href="https://www.flowtech.co.uk/" target="_blank" rel="noopener noreferrer" className="underline"> Flowtech</a>, and more.
        </p>
        <p className="mb-4">
          That being said, if you're interested in the nitty-gritty, feel free to check out my 
          <a href="https://www.linkedin.com/in/heyitsbalazs/" target="_blank" rel="noopener noreferrer" className="underline"> LinkedIn</a>.
        </p>
      </div>

      <div className="mb-12">
        <h2 className="font-semibold text-xl mb-4 tracking-tighter">
          Founder of <a href="https://ezzra.com" target="_blank" rel="noopener noreferrer" className="underline">EZZRA</a>
        </h2>
        <p className="mb-4">
          Ezzra is a Men's Jewellery Design Studio, aiming to create fashionable statement pieces. We 
          predominantly use Recycled Stainless Steel, to craft long-lasting, durable & 
          environmentally-conscious jewellery.
        </p>
        <p className="mb-4">
          Launched in mid-2022, we've sold thousands of pieces to customers across Hungary, Austria, 
          Slovakia & Romania.
        </p>
      </div>
    </section>
  )
}
