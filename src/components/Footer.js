const Footer = () => {
    return(

        <footer className="bg-pink-400 text-white py-8">
            {/*py: vertical padding to the top and bottom of the footer*/}
            <div className="container mx-auto text-center">
                {/*Use the copy to represent the copy right symbol*/}
                <p>&copy; {new Date().getFullYear()} Khai. All rights preserved</p>
            </div>
        </footer>
    )
}
export default Footer