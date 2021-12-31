 const currDate = new Date();
 const currTime = currDate.getFullYear();

function Footer()
{
    return(<footer> &copy; {currTime} </footer>);
}

export default Footer;