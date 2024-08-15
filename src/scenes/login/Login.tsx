import './login.css';
import {Text} from '@/core-ui/text/Text';
import {Button} from '@/core-ui/button/Button';

export default function Login() {
  return (
    <section className="login-section">
      <div className="container">
        <div className="login-container">
          <div className="logo">
            <img
              src="https://lumina-public-prod.s3.amazonaws.com/prod/1691117854-46fd7a76-96a2-4eab-af85-a5967faf0295-logo-g1-tagline-black.png"
              alt="logo"
            />
          </div>
          {/* <div>
            <Text size="normal" content="Login" className="choice" />
            <Text size="normal" content="Sign Up" className="choice" />
          </div>
          <input
            className="checkbox"
            type="checkbox"
            id="reg-log"
            name="reg-log"
          />
          <div className="cl-toggle-switch">
            <label className="cl-switch">
              <input type="checkbox" />
              <span></span>
            </label>
          </div> */}
          <div className="card-3d-wrap">
            <div className="card-3d-wrapper">
              <div className="card-front">
                <div className="center-wrap">
                  <div className="text-section">
                    <Text
                      size="subheader"
                      content="Login"
                      className="subtitle"
                    />
                    <div className="form-group">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="2.4"
                        stroke="#F6C143"
                        className="size-2 input-icon"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M16.5 12a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0Zm0 0c0 1.657 1.007 3 2.25 3S21 13.657 21 12a9 9 0 1 0-2.636 6.364M16.5 12V8.25"
                        />
                      </svg>
                      <input
                        type="email"
                        className="form-style"
                        placeholder="Email"
                      />
                    </div>
                    <div className="form-group mt-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="2.4"
                        stroke="#F6C143"
                        className="size-2 input-icon"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M16.5 10.5V6.75a4.5 4.5 0 1 0-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H6.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z"
                        />
                      </svg>
                      <input
                        type="password"
                        className="form-style"
                        placeholder="Password"
                      />
                    </div>
                    <div className="button">
                      <Button
                        type="primary"
                        content="Login"
                        style={{fontWeight: 'bolder'}}
                      />
                    </div>
                    <Text
                      size="small"
                      content="Forgot your password?"
                      className="forgot"
                    />
                  </div>
                </div>
              </div>
              {/* <div className="card-back">
                <div className="center-wrap">
                  <div className="text-section">
                    <Text
                      size="normal"
                      content="Sign Up"
                      className="subtitle"
                    />
                    <div className="form-group">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="2.4"
                        stroke="#F6C143"
                        className="input-icon"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
                        />
                      </svg>
                      <input
                        type="text"
                        className="form-style"
                        placeholder="Full Name"
                      />
                    </div>
                    <div className="form-group mt-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="2.4"
                        stroke="#F6C143"
                        className="input-icon"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z"
                        />
                      </svg>
                      <input
                        type="tel"
                        className="form-style"
                        placeholder="Phone Number"
                      />
                    </div>
                    <div className="form-group mt-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="2.4"
                        stroke="#F6C143"
                        className="size-2 input-icon"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M16.5 12a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0Zm0 0c0 1.657 1.007 3 2.25 3S21 13.657 21 12a9 9 0 1 0-2.636 6.364M16.5 12V8.25"
                        />
                      </svg>
                      <input
                        type="email"
                        className="form-style"
                        placeholder="Email"
                      />
                    </div>
                    <div className="form-group mt-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="2.4"
                        stroke="#F6C143"
                        className="size-2 input-icon"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M16.5 10.5V6.75a4.5 4.5 0 1 0-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H6.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z"
                        />
                      </svg>
                      <input
                        type="password"
                        className="form-style"
                        placeholder="Password"
                      />
                    </div>
                    <div className="button">
                      <Button
                        type="primary"
                        content="REGISTER"
                        className="button"
                      />
                    </div>
                  </div>
                </div>
              </div> */}
            </div>
          </div>
        </div>
        <div>
          <div className="images-container">
            <img
              src={
                'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/3bc4c93f-7d3f-4930-b0b1-b941303cae0c/dg1gxi7-a30b7c4d-0acd-4829-8e8b-2135cb62703d.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzNiYzRjOTNmLTdkM2YtNDkzMC1iMGIxLWI5NDEzMDNjYWUwY1wvZGcxZ3hpNy1hMzBiN2M0ZC0wYWNkLTQ4MjktOGU4Yi0yMTM1Y2I2MjcwM2QucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.I5crlQVBPVHakoAQ7OkffknPpixDBlSyB8yEHtbygTc'
              }
              alt="image"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
