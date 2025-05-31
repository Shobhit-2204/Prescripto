import jwt from 'jsonwebtoken'

// Doctor authentication middleware
const authDoctor = async (req, res, next) => {
    try {
        const { dtoken } = req.headers
        if (!dtoken) {
            return res.json({ success: false, message: 'Not Authorized Login again.' })
        }

        const token_decode = jwt.verify(dtoken, process.env.JWT_SECRET)

        req.doctorId = token_decode.id  // ✅ Correct way to store user ID

        next()
    } catch (error) {
        console.log(error)
        res.json({ success: false, message: error.message })
    }
}

export default authDoctor
