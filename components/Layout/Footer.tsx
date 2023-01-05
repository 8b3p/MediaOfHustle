import Link from "next/link"
import styles from "@/styles/Layout.module.css"
import { useRouter } from "next/router"


const Footer = () => {
  const router = useRouter();

  return (
    <div className="mt-auto">
      <section className=" bg-primary text-white position-relative" style={{ padding: '7.5em 0em' }}>
        <div className="d-flex container flex-column justify-content-center  align-items-center">
          <p className="text-break display-5 text-center" style={{ hyphens: 'auto', WebkitHyphens: 'auto', fontWeight: 'bold' }}>Need a little marketing boost?</p>
          <p className="fs-3">Get in touch with us.</p>
          <div className="d-flex justify-content-center align-items-center" style={{ height: '5em' }}>
            <Link className={styles.button + " " + styles['button-lg'] + " "} href="/contact"><strong>Contact</strong></Link>
          </div>
        </div>
      </section>
      <section className="bg-black text-white p-5">
        <div className="container pb-5 pt-4">
          <div className="row">
            <div className="col-lg-3 my-3">
              <h4>MEDIA OF HUSTLE</h4>
            </div>
            <div className="col-lg-3 my-4">
              <ul className={styles.footerList + ' d-flex flex-column gap-2'}>
                <div className='h6'>FOR BRANDS</div>
                <li>
                  <Link className='p-0' href="/services/for-brands/influencer-marketing" style={router.route.includes("influencer-marketing") ? { fontWeight: '900' } : {}}>
                    Influencer Marketing
                  </Link>
                </li>
                <li>
                  <Link className='p-0' href="/services/for-brands/social-media-marketing" style={router.route.includes("social-media-marketing") ? { fontWeight: '900' } : {}}>
                    Social Media Marketing
                  </Link>
                </li>
                <li>
                  <Link className='p-0' href="/services/for-brands/paid-media" style={router.route.includes("paid-media") ? { fontWeight: '900' } : {}}>
                    Paid Media
                  </Link>
                </li>
              </ul>
            </div>
            <div className="col-lg-2 my-4">
              <ul className={styles.footerList + ' d-flex flex-column gap-2'}>
                <div className='h6'>FOR INFLUENCERS</div>
                <li>
                  <Link className='p-0' href="/services/for-influencers/management" style={router.route.includes("management") ? { fontWeight: '900' } : {}}>
                    Management
                  </Link>
                </li>
              </ul>
            </div>
            <div className="col-lg-2 my-4">
              <ul className={styles.footerList + ' d-flex flex-column gap-2'}>
                <div className='h6'>CASE STUDIES</div>
                <li>
                  <Link className='p-0' href="/case-studies/gaming" style={router.route.includes("gaming") ? { fontWeight: '900' } : {}}>
                    Gaming
                  </Link>
                </li>
                <li>
                  <Link className='p-0' href="/case-studies/lifestyle" style={router.route.includes("lifestyle") ? { fontWeight: '900' } : {}}>
                    LifeStyle
                  </Link>
                </li>
                <li>
                  <Link className='p-0' href="/case-studies/tech" style={router.route.includes("tech") ? { fontWeight: '900' } : {}}>
                    Tech
                  </Link>
                </li>
              </ul>
            </div>
            <div className="col-lg-2 my-4">
              <ul className={styles.footerList + ' d-flex flex-column gap-2'}>
                <div className='h6'>MORE</div>
                <li>
                  <Link className='p-0' href="/about" style={router.route.includes("/about") ? { fontWeight: '900' } : {}}>
                    About
                  </Link>
                </li>
                <li>
                  <Link className='p-0' href="/contact" style={router.route.includes("/contact") ? { fontWeight: '900' } : {}}>
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-black text-white" style={{ marginTop: '1px' }}>
        <div className="container d-flex justify-content-between">
          <span className="m-3 fs-6">Turkey, Istanbul</span>
          <span className="m-3 fs-6"> Copyright © 2023 MEDIA OF HUSTLE. </span>
        </div>
      </section>
    </div>
  )
}



export default Footer
