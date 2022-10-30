export default function validate({
  memberName,
  memberEmail,
  memberPassword,
  memberPasswordConfirm,
  month,
  day,
  year,
}) {
  const errors = {};

  if (!memberName) {
    errors.memberName = "이름이 입력되지 않았습니다.";
  } else if (memberName.length > 20) {
    errors.memberName = "20자 이상 작성은 불가능 합니다.";
  } else if (memberName.length < 2) {
    errors.memberName = "2자 이상의 이름을 작성해주세요.";
  } else {
    errors.memberName = "사용 가능합니다.";
  }

  if (!memberEmail) {
    errors.memberEmail = "이메일이 입력되지 않았습니다.";
  } else if (memberEmail.length >= 30) {
    errors.memberEmail = "30자 이상 작성은 불가능 합니다.";
  } else if (
    !/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,5}$/i.test(memberEmail)
  ) {
    errors.memberEmail = "이메일 형식으로 작성해주세요.";
  } else {
    errors.memberEmail = "사용 가능합니다.";
  }

  if (!memberPassword) {
    errors.memberPassword = "비밀번호가 입력되지 않았습니다.";
  } else if (memberPassword.length < 8) {
    errors.memberPassword = "8자 이상의 이름을 작성해주세요.";
  } else if (memberPassword.length >= 20) {
    errors.memberPassword = "20자 이상 작성은 불가능 합니다.";
  } else {
    errors.memberPassword = "사용 가능합니다.";
  }

  if (!memberPasswordConfirm) {
    errors.memberPasswordConfirm = "제목이 입력되지 않았습니다.";
  } else if (memberPasswordConfirm !== memberPassword) {
    errors.memberPasswordConfirm = "비밀번호와 일치하지 않습니다.";
  } else {
    errors.memberPasswordConfirm = "사용 가능합니다.";
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
