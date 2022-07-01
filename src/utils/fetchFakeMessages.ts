var text = "Lorem ipsum dolor sit amet, consectetur adipiscing elit.\
Sed ac erat eleifend, blandit nibh at, interdum justo.\
Sed sit amet eros tincidunt, congue nibh id, laoreet nunc.\
Ut ac arcu interdum, porttitor arcu a, condimentum leo.\
Proin consectetur dolor ac placerat cursus.\
Aenean eleifend est eget odio faucibus, ac dapibus nisi molestie.\
Praesent eget augue finibus, gravida lacus eget, porttitor libero.\
Nullam at ligula at nisi pellentesque dignissim in eu felis.\
Suspendisse elementum ante ac porta blandit.\
Ut ultricies risus eu tempus vehicula.\
Vestibulum porttitor quam et lorem dignissim, et luctus nunc ultricies.\
Suspendisse eu est sollicitudin, auctor mauris eget, ultricies elit.\
Vivamus pretium magna at urna maximus, porttitor facilisis sapien congue.\
Phasellus elementum lectus auctor, lobortis elit in, imperdiet purus.\
Donec suscipit orci quis odio blandit, sit amet sollicitudin sapien auctor.\
Curabitur vulputate leo eu dapibus suscipit";

text += text;

const messages = text.split('.');

function fetchFakeMessages() {
    const messagesObjs = [];
    for (let i = 0; i < messages.length; i++) {
        const source = Math.floor(Math.random() * 2);
        const message = messages[i];
        messagesObjs.push({
            message,
            source
        });
    }
    return Promise.resolve(messagesObjs);
}

export default fetchFakeMessages;