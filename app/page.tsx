'use client'

import Image from 'next/image'
import styled from "styled-components";

export default function Home() {
    return (
        <Container>
            <Name>Balázs Otakomaiya</Name>
            <Header>
                <Portrait
                    src="/avatar.jpg"
                    alt="My portrait"
                    width={200}
                    height={200}
                    priority
                />
                <Summary>
                    Hey, I’m Balázs. I love building beautiful, user-experience-focused digital experiences. I’ve
                    Co-Founded a successful Men’s Jewellery Brand called Ezzra, built a popular mobile app used by tens
                    of thousands called PartyPass, all the whilst working on some exciting projects as a Software
                    Engineer over at Typeform, Booking.com, PokerStars and more.

                    <Links>
                        {/*<Link target='_blank' href=''>Blog</Link>*/}
                        <Link target='_blank' href='/resume.pdf'>Resume</Link>
                        <Link target='_blank' href='https://www.linkedin.com/in/heyitsbalazs/'>LinkedIn</Link>
                        <Link target='_blank' href='mailto:balazs@otakomaiya.com'>Contact</Link>
                    </Links>
                </Summary>
            </Header>

            <Section>
                <Heading>Meet my toolbox</Heading>
                <Paragraph>
                    Building a digital product is an eloquent dance between making sound, long-term engineering
                    decisions
                    and shipping fast, failing fast, and subsequently finding your product-market fit.

                    <br/> <br/>

                    Having have fallen in love with <b>React</b> & <b>TypeScript</b>, I’ve been using them to create
                    beautiful, performant
                    and scalable web applications for the past 5 years.
                </Paragraph>
            </Section>

            <Section>
                <Heading>My Career</Heading>
                <Paragraph>
                    I&apos;ve been fortunate enough to work with some of the most talented people in the industry, on
                    some
                    truly exciting projects.

                    <br/> <br/>

                    Over at <Link target='_blank' href='https://typeform.com'>Typeform</Link>, I&apos;ve been working on
                    their brand new marketing automation tool – much like, say, Ortto or ActiveCampaign in a small,
                    tight-knit team.

                    <br/> <br/>

                    <Link target='_blank' href='https://booking.com'>Booking.com</Link> was a completely different
                    experience, working on a large-scale enterprise product, truly gaining understanding of the
                    importance of
                    engineering concepts that span beyond code quality, such as scalability, performance, accessibility,
                    and observability.

                    <br/> <br/>

                    <Link target='_blank' href='https://www.deptagency.com/'>DEPT</Link>, a global digital agency, was
                    where I&apos;ve had the opportunity to work on a wide variety of projects, including <Link
                    target='_blank' href='https://www.ascot.com/'>Royal Ascot</Link>, <Link
                    target='_blank' href='https://totum.com/'>TOTUM</Link>, <Link target='_blank'
                                                                                  href='https://steamforged.com'>SteamForged</Link>, <Link
                    target='_blank' href='https://www.flowtech.co.uk/'>Flowtech</Link>, and more.

                    <br/> <br/>

                    That being said, if you&apos;re interested in the nitty-gritty, feel free to check out my <Link
                    target='_blank' href='/resume.pdf'>resume</Link> or <Link target='_blank'
                                                                              href='https://www.linkedin.com/in/heyitsbalazs/'>LinkedIn</Link>.

                    {/* todo: timeline */}
                </Paragraph>
            </Section>

            <Section>
                <Heading>Co-Founder of <Link target='_blank' href='https://ezzra.com'>Ezzra</Link></Heading>
                <Paragraph>
                    Ezzra is a Men&apos;s Jewellery Design Studio, aiming to create fashionable statement pieces. We
                    predominantly use Recycled Stainless Steel, to craft long-lasting, durable &
                    environmentally-conscious jewellery.

                    <br/> <br/>

                    Launched in mid-2022, we&apos;ve sold thousands of pieces to customers across Hungary, Austria,
                    Slovakia
                    & Romania.
                </Paragraph>
            </Section>

            <Section>
                <Heading>Co-Founder of <Link target='_blank' href='https://partypass.co'>PartyPass</Link></Heading>
                <Paragraph>
                    PartyPass, launched in 2023, is a mobile app that allows you to plan your night out in
                    Budapest with complete confidence.

                    <br/> <br/>

                    We&apos;ve partnered with every major nightclub & bar in the city, to provide you with the best,
                    yet importantly unbiased nightlife guide available – with up to date information on events happening
                    real-time.
                </Paragraph>
            </Section>
        </Container>
    )
}

const Container = styled.main`
  max-width: 800px;
  margin: 0 auto;

  @media (max-width: 800px) {
    width: 100%;
  }
`;

const Name = styled.div`
  text-transform: uppercase;
  font-size: 75px;
  text-align: center;
  margin-bottom: 24px;
  font-family: var(--font-telesha);

  @media (max-width: 800px) {
    font-size: 48px;
  }
`

const Header = styled.header`
  display: flex;
  gap: 32px;
  align-items: center;
  margin-bottom: 48px;

  @media (max-width: 800px) {
    flex-direction: column;
    text-align: center;
    gap: 16px;
  }
`

const Portrait = styled(Image)`
  border-radius: 50%;
`

const Summary = styled.div`
  font-size: 16px;
  line-height: 1.5;
  color: var(--paragraph-color);
`

const Links = styled.div`
  display: flex;
  gap: 16px;
  margin-top: 16px;

  @media (max-width: 800px) {
    justify-content: center;
  }
`

const Section = styled.section`
  margin-bottom: 48px;
`

const Heading = styled.h2`
  font-size: 20px;
  font-weight: 500;
`

const Link = styled.a`
  text-decoration: underline;
  color: var(--link-color);
`

const Paragraph = styled.p`
  color: var(--paragraph-color)
`
