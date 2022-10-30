import { Link } from "react-router-dom"
import "../style/login.css"
import CommonSecttion from "../UI/CommonSecttion"
function Login(){
    const hanldeSubmit=(e)=>{
        e.preventDefault()
    }
    return(
        <>
        <CommonSecttion title="Login"/>
        <section className="section_login">   
              <form className="form form_login" onSubmit={hanldeSubmit}>
                <div className="form_group">
                  <input
                    type="email"
                    placeholder="Email"
                    
                  />
                </div>
                <div className="form_group">
                  <input
                    type="password"
                    placeholder="Password"
                    
                  />
                </div>
                <button type="submit" className="Login_btn">
                  Login
                </button>
              </form>
              <Link to="/register">
                Don't have an account?  Create an account
              </Link>
      </section>
        </>
    )
}
export default Login