import JobTitles from "./jobtitles";
import "./myInfo.css"

function MyInfo() {
    return <div className="myInfoSctn">
        <h1>Hello</h1>
        <p>Welcome to my portfolio. Explore more. Learn about this site's author. Feel free to comment at the comment section at the <a href="#tocommentsection"> bottom of the page.</a></p>
        <p className="myJobsTile">I am a <JobTitles /></p>
    </div>
}

export default MyInfo; 