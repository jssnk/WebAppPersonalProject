import 'package:flutter/material.dart';
import 'package:leaing_helper/utility/decorations/color.dart';

import '../../components/Forms/admin_register_form/learning_word_register_form.dart';

class LearningRegisterPage extends StatelessWidget{
  const LearningRegisterPage({Key? key}) :super (key:key);

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: SingleChildScrollView(
        child: SafeArea(
          child: Container(
              child: Column(
                children: [
                  LearningRegisterForm(),
                ],
              )),
        ),
      ),
    );
  }

}