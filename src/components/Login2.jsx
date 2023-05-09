import Img2 from '../assets/img/orangejuice.jpg';
​
const Login = () => {
    return ( 
        <>
        <div className="container">
            <div className="bg-image p-5 text-center shadow-1-strong rounded mb-5 text-white"
                    // style={{backgroundImage: `url("https://cdn.pixabay.com/photo/2023/04/17/15/45/comma-7932755_960_720.jpg")`}} >
                style={{backgroundImage: `url(${Img2})`,backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'center',
                    height: '50rem', width: '70rem'}}>
                    <h1 style={{color: 'orange', textAlign: 'left'}}>Login Page</h1>
                    <form className="mx-5">
                        <div className='row'>
                            <div className='col-md-3'>
                                <div className="mb-3 text-success row-xl-4">
                                    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder='email'/>
                                </div>
                            </div>
                        </div>
                        <div className='row'>
                            <div className='col-md-3'>
                                <div className="mb-3 text-success">
                                    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                                    <input type="password" className="form-control" id="exampleInputPassword1" placeholder='password'/>
                                </div>
                            </div>
                        </div>
                        <div className='row'>
                            <div className='col-md-3'>
                                <button type="button" className="btn btn-warning">Submit</button>
                            </div>
                        </div>
                    </form>  
            </div> 
        </div>
        </>
     );
}
 
export default Login;