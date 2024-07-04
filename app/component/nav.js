import Link from "next/link"

export default function Nav() {
  return (
    <>
      <nav class="navbar navbar-expand-lg container">
        <div class="container-fluid">
            <Link class="navbar-brand" href="/">
                <img src="/img/logo.png" alt="Logo" width="100" class="d-inline-block align-text-center"></img>
            </Link>
            <button class="navbar-toggler collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="navbar-collapse justify-content-end collapse" id="navbarSupportedContent">
            <ul class="navbar-nav">
              <li class="nav-item">
                <Link class="nav-link" aria-current="page" href="/"><i class="fa-solid fa-house me-1" aria-hidden="true"></i>Home</Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" aria-current="page" href="/about"><i class="fa-solid fa-circle-info me-1" aria-hidden="true"></i>About</Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" aria-current="page" href="/service"><i class="fa-solid fa-list-ul me-1 me-1" aria-hidden="true"></i>Service</Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" href="/contact"><i class="fa-solid fa-message me-1" aria-hidden="true"></i>Contact</Link>
              </li>
            </ul>
            <button type="button" data-bs-toggle="modal" data-bs-target="#registerModal" class="btn btn-primary me-2"><i class="fa-solid fa-user-plus me-1" aria-hidden="true"></i>Sign Up</button>
            <button type="button" data-bs-toggle="modal" data-bs-target="#loginModal" class="btn btn-outline-success me-2"><i class="fa-solid fa-right-to-bracket me-1" aria-hidden="true"></i>Sign In</button>
          </div>
        </div>
      </nav>
    {/* modal start */}
    {/* login */}
    <div class="modal fade" tabindex="-1" id="loginModal">
      <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title"><i class="bi bi-box-arrow-in-right me-2"></i>Login</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
            <div class="modal-body">
              <form class="row g-3 needs-validation" novalidate>
                <div class="col-md-12">
                  <label for="validationCustomUsername" class="form-label">Username</label>
                  <div class="input-group has-validation">
                      <span class="input-group-text text-secondary" id="inputGroupPrepend"><i class="fa-solid fa-user"></i></span>
                      <input type="text" class="form-control" id="validationCustomUsername" aria-describedby="inputGroupPrepend" required></input>
                      <div class="invalid-feedback">
                          Please enter a username.
                      </div>
                  </div>
                </div>
                <div class="col-md-12">
                  <label for="validationCustomUsername" class="form-label">Password</label>
                  <div class="input-group has-validation">
                    <span class="input-group-text text-secondary" id="inputGroupPrepend"><i class="fa-solid fa-lock"></i></span>
                    <input type="password" class="form-control" id="validationCustomUsername" aria-describedby="inputGroupPrepend" required></input>
                    <div class="invalid-feedback">
                        Please enter password.
                    </div>
                  </div>
                </div>
              </form>
              <div class="modal-footer">
                <button type="submit" class="btn btn-primary">Sign in</button>
                <button type="reset" class="btn btn-danger">Cancel</button>
              </div>
            </div>
        </div>
      </div>
    </div>
    {/* register */}
    <div class="modal fade" tabindex="-1" id="registerModal">
      <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title"><i class="bi bi-box-arrow-in-right me-2"></i>Register</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
            <div class="modal-body">
              <form class="row g-3 needs-validation" novalidate>
                <div class="col-md-6">
                  <label for="validationCustomUsername" class="form-label">Username</label>
                  <div class="input-group has-validation">
                    <span class="input-group-text text-secondary" id="inputGroupPrepend"><i class="fa-solid fa-user"></i></span>
                    <input type="text" class="form-control" id="validationCustomUsername" aria-describedby="inputGroupPrepend" required></input>
                    <div class="invalid-feedback">
                        Please enter a username.
                    </div>
                  </div>
                </div>
                <div class="col-md-6">
                  <label for="validationCustomUsername" class="form-label">Surname</label>
                  <div class="input-group has-validation">
                    <span class="input-group-text text-secondary" id="inputGroupPrepend"><i class="fa-solid fa-user"></i></span>
                    <input type="text" class="form-control" id="validationCustomUsername" aria-describedby="inputGroupPrepend" required></input>
                    <div class="invalid-feedback">
                        Please enter a surname.
                    </div>
                  </div>
                </div>
                <div class="col-md-6">
                  <label for="validationCustomUsername" class="form-label">Tel.</label>
                  <div class="input-group has-validation">
                    <span class="input-group-text text-secondary" id="inputGroupPrepend" ><i class="fa-solid fa-phone"></i></span>
                    <input type="password" class="form-control" id="validationCustomUsername" aria-describedby="inputGroupPrepend" required></input>
                    <div class="invalid-feedback">
                        Please enter phone number.
                    </div>
                  </div>
                </div>
                <div class="col-md-6">
                  <label for="validationCustom04" class="form-label">Gender</label>
                  <select class="form-select" id="validationCustom04" required>
                    <option selected disabled value="">Choose...</option>
                    <option>Male</option>
                    <option>Female</option>
                    <option>LGBTQ+</option>
                  </select>
                  <div class="invalid-feedback">
                    Please select a gender.
                  </div>
                </div>
                <div class="col-md-12">
                  <label for="validationCustomUsername" class="form-label">Email</label>
                  <div class="input-group has-validation">
                    <span class="input-group-text text-secondary" id="inputGroupPrepend"><i class="fa-solid fa-envelope"></i></span>
                    <input type="email" class="form-control" id="validationCustomUsername" aria-describedby="inputGroupPrepend" required></input>
                    <div class="invalid-feedback">
                        Please enter a email.
                    </div>
                  </div>
                </div>
                <div class="col-md-12">
                  <label for="validationCustomUsername" class="form-label">Password</label>
                  <div class="input-group has-validation">
                    <span class="input-group-text text-secondary" id="inputGroupPrepend"><i class="fa-solid fa-lock"></i></span>
                    <input type="password" class="form-control" id="validationCustomUsername" aria-describedby="inputGroupPrepend" required></input>
                    <div class="invalid-feedback">
                        Please enter password.
                    </div>
                  </div>
                </div>
                <div class="col-md-12">
                  <label for="validationCustomUsername" class="form-label">Confirm Password</label>
                  <div class="input-group has-validation">
                    <span class="input-group-text text-secondary" id="inputGroupPrepend"><i class="fa-solid fa-lock"></i></span>
                    <input type="password" class="form-control" id="validationCustomUsername" aria-describedby="inputGroupPrepend" required></input>
                    <div class="invalid-feedback">
                        Please enter password.
                    </div>
                  </div>
                </div>
                <div class="modal-footer">
                  <button type="submit" class="btn btn-primary">Sign in</button>
                  <button type="reset" class="btn btn-danger">Cancel</button>
                </div>
              </form>
            </div>
        </div>
      </div>
    </div>
    </>
  );
}
