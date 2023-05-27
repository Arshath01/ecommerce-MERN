export default function Banner (){
    return (
        <>
            <div className="mx-3 mt-2 rounded py-4 pt-3" id="banner">
                <div className="container pt-3">
                    <h1 className="w-100">WELCOME TO EMART.</h1>
                    <span className="text-secondary" id="span">Empowering Your Retail Experience, One Click at a Time.</span> <br />
                    <input type="submit" value="SHOP NOW"
                        className="btn btn-sm btn-primary mt-3" />
                </div>
            </div>
        </>
    )
}