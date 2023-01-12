import styles from '@/styles/Layout.module.css'
import Link from 'next/link';
import { useRouter } from 'next/router';

const Navbar = () => {
  const router = useRouter();

  return (
    <div className={"fixed-top " + styles["nav-container"]}>
      <div className={"container d-flex justify-content-between align-items-center row h-100 m-auto " + styles.navigation}>
        <Link href="/" className="fs-5 col-2 text-center text-decoration-none text-white">MEDIA OF HUSTLE</Link>
        <div className='col-9 d-flex row justify-content-between align-items-center'>
          <ul className="col-8 d-flex align-items-center gap-5 justify-content-center p-0 m-0">
            <li className={styles.dropdown + (router.route.includes("services") ? (" " + styles.selected) : '')}>
              <button className={styles['menu-item']}>Services</button>
              <div className={styles["dropdown-content"]} style={{ width: '30rem' }}>
                <div className="row justify-content-around">
                  <div className='col-6 d-flex flex-column gap-3'>
                    <div className='text-black h6'>FOR BRANDS</div>
                    <Link className='p-0' href="/services/for-brands/influencer-marketing" style={router.route.includes("influencer-marketing") ? { fontWeight: '900' } : {}}>
                      Influencer Marketing
                    </Link>
                    <Link className='p-0' href="/services/for-brands/social-media-marketing" style={router.route.includes("social-media-marketing") ? { fontWeight: '900' } : {}}>
                      Social Media Marketing
                    </Link>
                    <Link className='p-0' href="/services/for-brands/paid-media" style={router.route.includes("paid-media") ? { fontWeight: '900' } : {}}>
                      Paid Media
                    </Link>
                  </div>
                  <div className='col-6 d-flex ps-0'>
                    <div className='vr p-0 m-0 bg-dark me-5' />
                    <div className='d-flex flex-column gap-3'>
                      <div className='text-black h6'>FOR INFLUENCERS</div>
                      <Link className='p-0' href="/services/for-influencers/management" style={router.route.includes("management") ? { fontWeight: '900' } : {}}>
                        Management
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </li>
            <li className={styles.dropdown + (router.route.includes("case-studies") ? (" " + styles.selected) : '')}>
              <button className={styles['menu-item']}>Case Studies</button>
              <div className={styles["dropdown-content"] + " col-6 d-flex flex-column gap-3 p-4"} style={{ width: '10em' }}>
                <Link className='p-0' href="/case-studies/gaming" style={router.route.includes("gaming") ? { fontWeight: '900' } : {}}>
                  Gaming
                </Link>
                <Link className='p-0' href="/case-studies/lifestyle" style={router.route.includes("lifestyle") ? { fontWeight: '900' } : {}}>
                  LifeStyle
                </Link>
                <Link className='p-0' href="/case-studies/tech" style={router.route.includes("tech") ? { fontWeight: '900' } : {}}>
                  Tech
                </Link>
              </div>
            </li>
            <li className={styles['menu-item'] + (router.route === "/about" ? (" " + styles.selected) : '')}>
              <Link href="/about">
                About
              </Link>
            </li>
          </ul>
          <div className='col-3 d-flex justify-content-center align-items-center'>
            <Link className={styles.button} href="/contact"><strong>Contact</strong></Link>
          </div>
        </div>
      </div>
    </div >
  )
}

export default Navbar;  
