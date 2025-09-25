const sendButton = (req, res) => {
    console.log(req.body);
    res.status(200).json({
        message : "Button pressed"
    });

}
module.exports = sendButton;