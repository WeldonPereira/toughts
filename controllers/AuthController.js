const User = require("../models/User");
const bcrypt = require("bcryptjs");

module.exports = class AuthController {
  static login(req, res) {
    res.render("auth/login");
  }
  static register(req, res) {
    res.render("auth/register");
  }

  static async registerPost(req, res) {
    const { name, email, password, confirmpassword } = req.body;

    if (password != confirmpassword) {
      req.flash("message", "As senhas não conferem, tente novamente!");
      res.render("auth/register");

      return;
    }

    const checkIfUserExists = await User.findOne({ where: { email: email } });

    if (checkIfUserExists) {
      req.flash("message", "O e-mail já está em uso!");
      res.render("auth/register");

      return;
    }

    const salt = bcrypt.genSaltSync(10);
    const hashedPassword = bcrypt.hashSync(password, salt);

    const user = {
      name,
      email,
      password: hashedPassword,
    };

    try {
      const createdUser = await User.create(user);

      // Define o ID na sessão
      req.session.userid = createdUser.id;

      req.flash("message", "Cadastro realizado com sucesso!");

      // Salva a sessão e SÓ DEPOIS redireciona
      req.session.save(() => {
        res.redirect("/");
      });

      // Removido o segundo res.redirect("/") que estava aqui fora
    } catch (error) {
      console.log(error);
      // É boa prática avisar o usuário ou redirecionar em caso de erro no banco
      req.flash("message", "Erro ao criar usuário, tente mais tarde.");
      res.render("auth/register");
    }
  }

  static async loginPost(req, res) {
    const { email, password } = req.body;

    const user = await User.findOne({ where: { email: email } });

    if (!user) {
      req.flash("message", "Usuário não encontrado!");
      res.render("auth/register");

      return;
    }

    const passwordMatch = bcrypt.compareSync(password, user.password);

    if (!passwordMatch) {
      req.flash("message", "Senha inválida!");
      res.render("auth/login");

      return;
    }

    req.session.userid = user.id;

    req.flash("message", "Autenticação realizada com sucesso!");

    req.session.save(() => {
      res.redirect("/");
    });
  }
  static logout(req, res) {
    req.session.destroy();
    res.redirect("/login");
  }
};
