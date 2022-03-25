const router=require('express-promise-router')();
const Controller=require('../controllers/registration');
const {validateBody, schemas}=require('../helpers/registrationsRouteHelpers');
const passport=require('passport');
const passportConf=require('../passport');
const {checkIfAdmin, checkEventAccess, checkIfEventsCommittee} = require('../helpers/access-helper')

//localhost:PORT/registrations
router.route('/')
    .get(passport.authenticate('jwt',{session: false}), checkIfEventsCommittee, Controller.getAllRegistrations)

router.route('/register/:eventId')
    .post(passport.authenticate('jwt',{session: false}), validateBody(schemas.regSchema), Controller.registerInEvent)

router.route('/completepayment/:eventId')
    .post(passport.authenticate('jwt',{session: false}), Controller.completePayment)

router.route('/byevent/:eventId')
    .get(Controller.getRegistrationsByEvent)

router.route('/registration/:regId')
    .get(passport.authenticate('jwt',{session: false}), checkEventAccess, Controller.getRegistrationById)

router.route('/byuser/:userId')
    .get(passport.authenticate('jwt',{session: false}), checkEventAccess, Controller.getRegistrationsByUser)

router.route('/myregistrations')
    .get(passport.authenticate('jwt',{session: false}), Controller.getMyRegistrations)
    
router.route('/registered/:eventId')
    .get(
        passport.authenticate('jwt',{session: false}), 
        Controller.isRegistered)

module.exports=router;