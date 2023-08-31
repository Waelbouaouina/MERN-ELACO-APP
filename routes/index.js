var express = require('express');
const { Register, Login, Test, Admin } = require('../controllers/users.controllers');
var router = express.Router();
const passport = require('passport');
const { inRole, ROLES } = require('../security/Rolemiddelware');
const { AddProfile, FindAllProfiles, FindSingleProfile, DeleteProfile } = require('../controllers/profile.controllers');




/* Users Route. */
router.post('/register', Register);
router.post('/login', Login);

/* Add profile Route. */
router.post('/profiles',
    passport.authenticate('jwt', { session: false }),
    AddProfile);
/* Get All profiles. */
router.get('/profiles',
    passport.authenticate('jwt', { session: false }),
    inRole(ROLES.ADMIN),
    FindAllProfiles);
/* Get One profile. */
router.get('/profile',
    passport.authenticate('jwt', { session: false }),
    FindSingleProfile);
/* Deleate profiles. */
router.delete('/profiles/:id',
    passport.authenticate('jwt', { session: false }),
    inRole(ROLES.ADMIN),
    DeleteProfile);
















/* Juste pour tester le USER & ADMIN  Route. */
/*
router.get('/test',
    passport.authenticate('jwt', { session: false }),
    inRole(ROLES.USER),
    Test);

router.get('/admin',
    passport.authenticate('jwt', { session: false }),
    inRole(ROLES.ADMIN),
    Admin); 
*/



module.exports = router;