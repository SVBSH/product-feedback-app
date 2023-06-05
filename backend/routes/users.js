import { Router } from "express";

const router = Router();



router.get('/image', (req, res) => {
  // res.static('/user-icons/lala.png')
});

router.route('/:id')
  .get((req, res) => {
    res.json(req.user);
  })
  .put((req, res) => {
    res.send(`Get Id: , ${req.param.id}`);
  })
  .delete((req, res) => {
    res.send(`Get Id: , ${req.param.id}`);
  });


const users = [
  {
    name: 'svato',
  },
  {
    name: 'zia'
  }
]
router.param('id', (req, res, next, id) => {
  req.user = users[id]
  next();
})





export default router;