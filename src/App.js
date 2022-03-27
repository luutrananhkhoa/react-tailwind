import { Link, Outlet } from "react-router-dom";
import  cv from './assets/Group_27.png';
import './App.css';

function App() {
  return (
    <div className="min-h-screen min-w-full overflow-hidden">
      <nav className="w-full h-24 bg-primary flex justify-around items-center text-white">
          <h1 className="text-4xl">LOGO</h1>
          <div className="flex items-center">
            <ul className="flex text-xl">
              <Link to="/" className="px-8">HOME</Link>
              <Link to="/student" className="px-8">STUDENTS</Link>
              <Link to="/company" className="px-8">COMPANY</Link>
              <Link to="/mycv" className="px-8">MY CV</Link>
            </ul>
            <button className="w-[140px] h-[40px] px-10 text-[18px] text-center bg-orange-btn rounded-[24px]">LOGIN</button>
          </div>
      </nav>
      <div className="h-screen min-h-full bg-primary py-[6rem] flex justify-between px-[174px]">
        <div className="w-6/12">
          <h1 className="text-white text-[3.5rem] w-[100%] font-bold mb-4">You don’t need to be a designer have an impressive CV</h1>
          <p className="text-text text-lg w-[80%]">Effortlessly build a job worthy resume that gets you weird faster.</p>
          <button className="w-[10rem] h-12 text-[1.2rem] font-medium mt-8 bg-secondary text-white hover:cursor-pointer">Create My CV</button>
        </div>
        <div className="w-6/12 flex flex-col  ">
          <div className="w-[40%] h-[70%] bg-secondary absolute rounded-[50%] translate-y-[4rem] overflow-hidden"></div>
          <img src={cv} className="w-[65%] ml-[10rem] object-cover origin-top-left rotate-12" alt="" />
        </div>
      </div>
      <Outlet/>
    </div>
  );
}

export default App;
