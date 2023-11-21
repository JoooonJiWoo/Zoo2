            let togglemode1 = document.querySelector('#btnticket')
            let togglemode2 = document.querySelector('#btnanimal')
            
            togglemode1.addEventListener('click', function(event) {
                event.target.style.backgroundColor='palegreen'
                togglemode2.style.backgroundColor='rgb(238, 238, 238)'
                let table = document.querySelector('#table')
                let templete = `
                <h2>이용시간</h2>
            <div class="tablediv">
                <table border= "1">
                    <th>구분</th>
                    <th>이용시간</th>
                    <th>매표마감시간</th>
                    <th>비고</th>
                    <tr>
                        <td>하절기(3월~10월)</td>
                        <td>오전 9시 ~ 오후 7시</td>
                        <td>오후 6시까지</td>
                        <td>연중무휴</td>
                    </tr>
                    <tr>
                        <td>동절기(11월~2월)</td>
                        <td>오전 9시 ~ 오후 6시</td>
                        <td>오후 5시까지</td>
                        <td>연중무휴</td>
                    </tr>
                </table><br><br>
            </div>
                <h2>이용요금</h2>
            <div class="tablediv">
                <table border= "1">
                    <th>구분</th>
                    <th>일반 <br>
                        (19세 이상 65세 미만)</th>
                    <th>청소년<br>
                        (13세 이상 19세 미만)
                    </th>
                    <th>어린이<br>
                        (5세 이상 13세 미만)</th>
                    <th>군인<br>
                        (하사관 이하 군인)</th>
                    <tr>
                        <td>개인</td>
                        <td>3,000원</td>
                        <td>2,000원</td>
                        <td>1,000원</td>
                        <td>2,000원</td>
                    </tr>
                    <tr>
                        <td>단체<br>(20인이상)</td>
                        <td>2,100원</td>
                        <td>1,400원</td>
                        <td>700원</td>
                        <td>1,000원</td>
                    </tr>
                </table>
            </div>
                `
                table.innerHTML = templete;
            })

            togglemode2.addEventListener('click', function(event) {
                event.target.style.backgroundColor='palegreen'
                togglemode1.style.backgroundColor='rgb(238, 238, 238)'
                let table = document.querySelector('#table')
                let templete = `
                <h2>이용시간</h2>
            <div class="tablediv">
                <table border= "1">
                    <th>구분</th>
                    <th>이용시간</th>
                    <th>비고</th>
                    <tr>
                        <td>하절기(3월~10월)</td>
                        <td>오전 9시 ~ 오후 7시</td>
                        <td>연중무휴</td>
                    </tr>
                    <tr>
                        <td>동절기(11월~2월)</td>
                        <td>오전 9시 ~ 오후 6시</td>
                        <td>연중무휴</td>
                    </tr>
                </table><br><br>
            </div>
                <h2>이용요금</h2>
            <div class="tablediv">
                <table border= "1">
                    <th>구분</th>
                    <th>이용시간</th>
                    <th>비고</th>
                    <tr>
                        <td>포유류</td>
                        <td>오전9시~오후5시30분</td>
                        <td>연중무휴</td>
                    </tr>
                    <tr>
                        <td>포유류</td>
                        <td>오전9시~오후6시</td>
                        <td>연중무휴</td>
                    </tr>
                    <tr>
                        <td>파충류</td>
                        <td>오전9시~오후6시</td>
                        <td>연중무휴</td>
                    </tr>
                </table>
            </div>
                `
                table.innerHTML = templete;
            })