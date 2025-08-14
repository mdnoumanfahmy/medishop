import { Link } from "react-router-dom";

export default function Footer() {
    return (
      <>
        <div class="container">
          <footer class="py-3 my-4">
            <ul class="nav justify-content-center border-bottom pb-3 mb-3">
              <li class="nav-item">
                <a href="#" class="nav-link px-2 text-body-secondary">
                  Home
                </a>
              </li>
              <li class="nav-item">
                <Link to={'/contact'} class="nav-link px-2 text-body-secondary">
                  Contact
                </Link>
              </li>
              <li class="nav-item">
                <a href="#" class="nav-link px-2 text-body-secondary">
                  Pricing
                </a>
              </li>
              <li class="nav-item">
                <a href="#" class="nav-link px-2 text-body-secondary">
                  FAQs
                </a>
              </li>
              <li class="nav-item">
                <a href="#" class="nav-link px-2 text-body-secondary">
                  About
                </a>
              </li>
            </ul>
            <p class="text-center text-body-secondary">© 2025 Medishop, Inc, Designed by Md Nouman Fahmy</p>
          </footer>
        </div>
      </>
    );
}