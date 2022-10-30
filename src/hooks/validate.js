export default function validate({
  memberName,
  memberEmail,
  memberPassword,
  memberPasswordConfirm,
}) {
  const errors = {};

  if (memberName) {
    if (!memberName) {
      errors.memberName = "이름 입력되지 않았습니다.";
    } else if (memberName.length < 2) {
      errors.memberName = "2자 이상의 이름을 작성해주세요.";
    } else if (memberName.length > 20) {
      errors.memberName = "20자 이상 작성은 불가능 합니다.";
    }
    //     if (!memberEmail) {
    //       errors.memberEmail = "댓글이 입력되지 않았습니다.";
    //     } else if (memberEmail.length >= 200) {
    //       errors.memberEmail = "200자 이상 작성은 불가능 합니다.";
    //     }
    //   } else {
    //     if (!memberPassword) {
    //       errors.memberPassword = "작성자가 입력되지 않았습니다.";
    //     } else if (memberPassword.length < 2) {
    //       errors.memberPassword = "2자 이상의 이름을 작성해주세요.";
    //     } else if (memberPassword.length >= 20) {
    //       errors.memberPassword = "20자 이상 작성은 불가능 합니다.";
    //     }

    //     if (!memberPasswordConfirm) {
    //       errors.memberPasswordConfirm = "제목이 입력되지 않았습니다.";
    //     } else if (memberPasswordConfirm.length < 5) {
    //       errors.memberPasswordConfirm = "5자 이상의 제목을 작성해주세요.";
    //     } else if (memberPasswordConfirm.length >= 40) {
    //       errors.memberPasswordConfirm = "40자 이상 작성은 불가능 합니다.";
    //     }
  }

  return errors;
}

// if (!username) {
//     errors.username = "이메일이 입력되지 않앗습니다.";
//   } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(username)) {
//     errors.username = "입력된 이메일이 유효하지 않습니다.";
//   }

//   if (!title) {
//     errors.title = "비밀번호가 입력되지 않았습니다.";
//   } else if (title.length < 8) {
//     errors.title = "8자 이상의 패스워드를 사용해야 합니다.";
//   }
//   if (!content) {
//     errors.content = "비밀번호가 입력되지 않았습니다.";
//   } else if (content.length < 8) {
//     errors.content = "8자 이상의 패스워드를 사용해야 합니다.";
//   }
