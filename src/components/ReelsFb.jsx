function ReelFb() {
    return(
        <section id="Reels">
            <h3>Nuestros Reels de Facebook</h3>
            <div className="Card_Rells">
                <iframe
                    src="https://www.facebook.com/plugins/video.php?height=476&href=https%3A%2F%2Fwww.facebook.com%2F603792246702820%2Fvideos%2F820199596036868%2F&show_text=false&width=476&t=0"
                    width="476" height="476"
                    style={{border: "none", overflow: "hidden"}}
                    scrolling="no"
                    allowFullScreen={true}
                    allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                    title="Reel 1">
                </iframe>
                <iframe
                    src="https://www.facebook.com/plugins/video.php?height=476&href=https%3A%2F%2Fwww.facebook.com%2F100063953802934%2Fvideos%2F9116522471776614%2F&show_text=false&width=266&t=0"
                    width="266" height="476"
                    style={{border: "none", overflow: "hidden"}}
                    scrolling="no"
                    allowFullScreen={true}
                    allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                    title="Reel 2">
                </iframe>
                <iframe
                    src="https://www.facebook.com/plugins/video.php?height=476&href=https%3A%2F%2Fwww.facebook.com%2F100063953802934%2Fvideos%2F450647650523338%2F&show_text=false&width=476&t=0"
                    width="476" height="476"
                    style={{border: "none", overflow: "hidden"}}
                    scrolling="no"
                    allowFullScreen={true}
                    allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                    title="Reel 3">
                </iframe>
                <iframe         
                    src="https://www.facebook.com/plugins/video.php?height=476&href=https%3A%2F%2Fwww.facebook.com%2Freel%2F855892139308110%2F&show_text=false&width=267&t=0"
                    width="267" height="476"
                    style={{border: "none", overflow: "hidden"}}
                    scrolling="no"
                    allowFullScreen={true}
                    allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                    title="Reel 4">          
                </iframe>
            </div>
        </section>
    )
}

export default ReelFb;