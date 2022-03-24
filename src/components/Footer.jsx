const date = new Date();

function Footer() {
    return (
        <div>
            <p>
                Copyright &copy; {date.getFullYear()}
            </p>
        </div>
    );
}

export default Footer;