import dbConnect from '../../utils/dbConnect';
import User from '../../models/User';

dbConnect();

export default async (req, res) => {
    const { method } = req;

    switch (method) {
        case 'GET':
            try {
                const users = await User.find({});

                res.status(200).json({ success: true, data: users })
            } catch (error) {
                res.status(400).json({ success: false });
            }
            break;
        case 'POST':
            try {
                console.log("asasasasasas", req.body)
                const user = await User.create({ Name: req.body.pid, pageDetail: req.body.b });
                console.log({ user })

                res.status(200).json({ success: true, data: user })
            } catch (error) {
                res.status(400).json({ success: false, error });
            }
            break;
        default:
            res.status(400).json({ success: false });
            break;
    }
}