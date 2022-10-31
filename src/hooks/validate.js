export default function validate({
  memberName,
  memberEmail,
  memberPassword,
  memberPasswordConfirm,
  month,
  day,
  year,
  isSingUp,
}) {
  const errors = {};
  if (isSingUp) {
    //sighup form 인경우
    if (!memberName) {
      errors.memberName = "이름이 입력되지 않았습니다.";
    } else if (memberName.length > 20) {
      errors.memberName = "20자 이상 작성은 불가능 합니다.";
    } else if (memberName.length < 2) {
      errors.memberName = "2자 이상의 이름을 작성해주세요.";
    }

    if (!memberEmail) {
      errors.memberEmail = "이메일이 입력되지 않았습니다.";
    } else if (memberEmail.length >= 30) {
      errors.memberEmail = "30자 이상 작성은 불가능 합니다.";
    } else if (
      !/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,5}$/i.test(memberEmail)
    ) {
      errors.memberEmail = "이메일 형식으로 작성해주세요.";
    }

    if (!memberPassword) {
      errors.memberPassword = "비밀번호가 입력되지 않았습니다.";
    } else if (memberPassword.length < 8) {
      errors.memberPassword = "8자 이상의 이름을 작성해주세요.";
    } else if (memberPassword.length >= 20) {
      errors.memberPassword = "20자 이상 작성은 불가능 합니다.";
    } else if (
      !/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/i.test(
        memberPassword
      )
    ) {
      errors.memberPassword =
        "최소 하나 이상의 문자, 하나의 숫자 및 하나의 특수 문자가 필요합니다.";
    }
    if (!memberPasswordConfirm) {
      errors.memberPasswordConfirm = "비밀번호 확인이 입력되지 않았습니다.";
    } else if (memberPasswordConfirm !== memberPassword) {
      errors.memberPasswordConfirm = "비밀번호와 일치하지 않습니다.";
    }
  } else if (!isSingUp) {
    // login form 인 경우
    if (!memberEmail) {
      errors.memberEmail = "이메일이 입력되지 않았습니다.";
    } else if (memberEmail.length >= 30) {
      errors.memberEmail = "30자 이상 작성은 불가능 합니다.";
    } else if (
      !/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,5}$/i.test(memberEmail)
    ) {
      errors.memberEmail = "이메일 형식으로 작성해주세요.";
    }

    if (!memberPassword) {
      errors.memberPassword = "비밀번호가 입력되지 않았습니다.";
    } else if (memberPassword.length < 8) {
      errors.memberPassword = "8자 이상의 이름을 작성해주세요.";
    } else if (memberPassword.length >= 20) {
      errors.memberPassword = "20자 이상 작성은 불가능 합니다.";
    } else if (
      !/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/i.test(
        memberPassword
      )
    ) {
      errors.memberPassword =
        "최소 하나 이상의 문자, 하나의 숫자 및 하나의 특수 문자가 필요합니다.";
    }
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
