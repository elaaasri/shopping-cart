import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.container}>
      <div className={styles.promoArea}>
        <h3>BE A PART OF THE ESSENTIALS</h3>
        <p>Enjoy 15% off your first purchase when you sign up!</p>
        <div className={styles.promoInput}>
          <input type="text" placeholder="enter your email" />
          <button>SUBSCRIBE</button>
        </div>
      </div>

      <div className={styles.footerSecondArea}>
        <div className={styles.links}>
          <table className={styles.footerTable}>
            <thead>
              <tr>
                <th>COMPANY</th>
                <th>BRAND</th>
                <th>HELP</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Our Story</td>
                <td>Reviews</td>
                <td>Shopping & Returns</td>
              </tr>
              <tr>
                <td>Shop Locations</td>
                <td>Blog</td>
                <td>Warranty</td>
              </tr>
              <tr>
                <td>Virtual</td>
                <td>FAQ</td>
                <td>Repairs</td>
              </tr>
              <tr>
                <td>Products</td>
                <td>Style & Fit</td>
                <td>Contact Us</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className={styles.contact}>
          <h4>ASK A ESSENTIALS SPECIALIST</h4>
          <p>
            Whether you’re a collector or visiting for the first time, we’re
            here to help.
          </p>
          <div className={styles.contactIcons}>
            <div>
              <i className="fa-solid fa-phone-volume"></i>
              <p>(000)-ESSENTIALS</p>
            </div>
            <div>
              <i className="fa-solid fa-envelope"></i>
              <p>support@essentials.xyz</p>
            </div>
            <div>
              <i className="fa-solid fa-comment-dots"></i>
              <p>Chat With Us</p>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.footerLegal}>
        <p>© 2025 ESSENTIALS</p>
        <p>Privacy Accessibility</p>
        <p>Terms of Service</p>
        <p>Refund Policy</p>
        <p>Conformity</p>
      </div>
      <div className={styles.footerTag}>
        <p>Copyright ©</p>
        &nbsp;
        <p>elaaasri</p>
        &nbsp;
        <a href="https://github.com/elaaasri">
          <i className={`${styles.footerGitIcon} fab fa-github`}></i>
        </a>
      </div>
    </footer>
  );
};
export default Footer;
