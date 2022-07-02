//6kyu

// Your task in this Kata is to emulate text justify right in monospace font. You will be given a single-lined text and the expected justification width. The longest word will never be greater than this width.

// Here are the rules:

//     Use spaces to fill in the gaps on the left side of the words.
//     Each line should contain as many words as possible.
//     Use '\n' to separate lines.
//     Gap between words can't differ by more than one space.
//     Lines should end with a word not a space.
//     '\n' is not included in the length of a line.
//     Last line should not contain '\n'


function alignRight(text,width){
    let totalWidth=text.length;
    perLineLen=totalWidth/width;

    for(let i=0;i<=perLineLen;i++){
       text[i]=text.slice(0,width)+"\n"
       return text[i]+text.slice(text[i].length, text[i].length+width)
    }
  }
console.log(alignRight("Gap between words can't differ by more than one space",10))



