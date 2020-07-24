const router = require('express').Router();
const UserController = require('../controllers/UserController.js');
const { authentication, is } = require('../middleware/authentication.js')

router.post('/register', UserController.register);                                      // 1 REGISTER
router.post('/login', UserController.login);                                            // 2 LOGIN
router.get('/logout', authentication, UserController.logout);                           // 3 LOGOUT
router.get('/info', authentication, UserController.getUserInfo);                        // 4 GET USER INFO
router.get('/recover/:email', UserController.recover);                                  // 5 RECOVER PASSWORD ***
router.post('/reset', UserController.resetPassword);                                    // 6 RESET PASSWORD ***
router.put('/update/id/:_id', authentication, UserController.update);                   // 7 UPDATE USER
router.get('/all', authentication, is(['admin']), UserController.getUsersAll);          // 8 GET ALL USERS
router.delete('/delete/id/:id', authentication, is(['admin']), UserController.delete);  // 9 DELETE USER

//SEARCH
router.get('/search/id/:id', authentication, UserController.getUserById);               // 10 GET USER BY ID ***
router.get('/search/name/:name', authentication, UserController.getUserByName);         // 11 GET USER BY NAME ***

module.exports = router;