const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const jwt = require('jsonwebtoken');


const userSchema = new Schema(
    {
        firstName: { type: String, required: true },
        lastName: { type: String, required: true },
        email: { type: String, unique: true, required: true },  // فهرس فريد للـ email
        password: { type: String, required: false },
        phoneNumber: { type: String, required: false },
        image: { type: String, required: false },
        // إذا كنت بحاجة إلى الحقول المعلقة مثل address أو payments:
        // address: { type: String, required: false },
        // payments: [
        //     { type: mongoose.Schema.Types.ObjectId, ref: 'Payment' }
        // ]

    },
    {
        timestamps: true,  // لتخزين التاريخ والوقت الذي تم فيه الإنشاء والتحديث
    }
);
userSchema.methods.generateAuthToken = function () {
    // توليد توكن JWT
    const token = jwt.sign({ _id: this._id, email: this.email }, 'your_jwt_secret', { expiresIn: '1h' });
    return token;
};

// التأكد من أن مفتاح فريد لا يحتوي على قيم فارغة أو null
userSchema.index({ email: 1 }, { unique: true });  // فهرس فريد للـ email

module.exports = mongoose.model('User', userSchema);
