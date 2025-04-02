function sotsu() {
    var N, D, i;
    N=prompt("자연수를 입력하세요.");
    D=0;
    for(i = 1; i <= N; i += 1) {
        if((N) % (i) == 0) {
            D = (typeof D == 'number' ? D:0) + 1;
        }
    };
    if(D == 2) {
        alert(N+"은(는) 소수입니다.");
    } else {
        alert(N+"은(는) 소수가 아닙니다.");
    }
    
}