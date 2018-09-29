<table>
  <tr>
    <td colspan="2"><code>new Intl.DateTimeFormat('ar').format(test_date)</code></td>
  </tr>
  <tr>
    <td>Chromium 69 Ubuntu</td>
    <td>1‏/2‏/2018</td>
  </tr>
  <tr>
    <td>Firefox 63 Linux</td>
    <td>١‏/٢‏/٢٠١٨</td>
  </tr>
  <tr>
    <td colspan="2"><code>new Intl.DateTimeFormat('ar', { day: '2-digit' }).format(test_date)</code></td>
  </tr>
  <tr>
    <td>Chromium 69 Ubuntu</td>
    <td>01</td>
  </tr>
  <tr>
    <td>Firefox 63 Linux</td>
    <td>٠١</td>
  </tr>
  <tr>
    <td colspan="2"><code>new Intl.DateTimeFormat('ar-u-ca-gregory', { day: '2-digit' }).format(test_date)</code></td>
  </tr>
  <tr>
    <td>Chromium 69 Ubuntu</td>
    <td>01</td>
  </tr>
  <tr>
    <td>Firefox 63 Linux</td>
    <td>٠١</td>
  </tr>
  <tr>
    <td colspan="2"><code>new Intl.DateTimeFormat('ar-u-ca-islamic', { day: '2-digit' }).format(test_date)</code></td>
  </tr>
  <tr>
    <td>Chromium 69 Ubuntu</td>
    <td>15</td>
  </tr>
  <tr>
    <td>Firefox 63 Linux</td>
    <td>١٥</td>
  </tr>
  <tr>
    <td colspan="2"><code>new Intl.DateTimeFormat('ar-u-ca-persian', { day: '2-digit' }).format(test_date)</code></td>
  </tr>
  <tr>
    <td>Chromium 69 Ubuntu</td>
    <td>12</td>
  </tr>
  <tr>
    <td>Firefox 63 Linux</td>
    <td>١٢</td>
  </tr>
  <tr>
    <td colspan="2"><code>new Intl.DateTimeFormat('ar', { day: 'numeric' }).format(test_date)</code></td>
  </tr>
  <tr>
    <td>Chromium 69 Ubuntu</td>
    <td>1</td>
  </tr>
  <tr>
    <td>Firefox 63 Linux</td>
    <td>١</td>
  </tr>
  <tr>
    <td colspan="2"><code>new Intl.DateTimeFormat('ar-u-ca-gregory', { day: 'numeric' }).format(test_date)</code></td>
  </tr>
  <tr>
    <td>Chromium 69 Ubuntu</td>
    <td>1</td>
  </tr>
  <tr>
    <td>Firefox 63 Linux</td>
    <td>١</td>
  </tr>
  <tr>
    <td colspan="2"><code>new Intl.DateTimeFormat('ar-u-ca-islamic', { day: 'numeric' }).format(test_date)</code></td>
  </tr>
  <tr>
    <td>Chromium 69 Ubuntu</td>
    <td>15</td>
  </tr>
  <tr>
    <td>Firefox 63 Linux</td>
    <td>١٥</td>
  </tr>
  <tr>
    <td colspan="2"><code>new Intl.DateTimeFormat('ar-u-ca-persian', { day: 'numeric' }).format(test_date)</code></td>
  </tr>
  <tr>
    <td>Chromium 69 Ubuntu</td>
    <td>12</td>
  </tr>
  <tr>
    <td>Firefox 63 Linux</td>
    <td>١٢</td>
  </tr>
  <tr>
    <td colspan="2"><code>new Intl.DateTimeFormat('ar', { era: 'long' }).format(test_date)</code></td>
  </tr>
  <tr>
    <td>Chromium 69 Ubuntu</td>
    <td>1 2 2018 ميلادي</td>
  </tr>
  <tr>
    <td>Firefox 63 Linux</td>
    <td>١ ٢ ٢٠١٨ ميلادي</td>
  </tr>
  <tr>
    <td colspan="2"><code>new Intl.DateTimeFormat('ar-u-ca-gregory', { era: 'long' }).format(test_date)</code></td>
  </tr>
  <tr>
    <td>Chromium 69 Ubuntu</td>
    <td>1 2 2018 ميلادي</td>
  </tr>
  <tr>
    <td>Firefox 63 Linux</td>
    <td>١ ٢ ٢٠١٨ ميلادي</td>
  </tr>
  <tr>
    <td colspan="2"><code>new Intl.DateTimeFormat('ar-u-ca-islamic', { era: 'long' }).format(test_date)</code></td>
  </tr>
  <tr>
    <td>Chromium 69 Ubuntu</td>
    <td>15 5 1439 هـ</td>
  </tr>
  <tr>
    <td>Firefox 63 Linux</td>
    <td>١٥ ٥ ١٤٣٩ هـ</td>
  </tr>
  <tr>
    <td colspan="2"><code>new Intl.DateTimeFormat('ar-u-ca-persian', { era: 'long' }).format(test_date)</code></td>
  </tr>
  <tr>
    <td>Chromium 69 Ubuntu</td>
    <td>12 11 1396 ه‍.ش</td>
  </tr>
  <tr>
    <td>Firefox 63 Linux</td>
    <td>١٢ ١١ ١٣٩٦ ه‍.ش</td>
  </tr>
  <tr>
    <td colspan="2"><code>new Intl.DateTimeFormat('ar', { era: 'narrow' }).format(test_date)</code></td>
  </tr>
  <tr>
    <td>Chromium 69 Ubuntu</td>
    <td>1 2 2018 م</td>
  </tr>
  <tr>
    <td>Firefox 63 Linux</td>
    <td>١ ٢ ٢٠١٨ م</td>
  </tr>
  <tr>
    <td colspan="2"><code>new Intl.DateTimeFormat('ar-u-ca-gregory', { era: 'narrow' }).format(test_date)</code></td>
  </tr>
  <tr>
    <td>Chromium 69 Ubuntu</td>
    <td>1 2 2018 م</td>
  </tr>
  <tr>
    <td>Firefox 63 Linux</td>
    <td>١ ٢ ٢٠١٨ م</td>
  </tr>
  <tr>
    <td colspan="2"><code>new Intl.DateTimeFormat('ar-u-ca-islamic', { era: 'narrow' }).format(test_date)</code></td>
  </tr>
  <tr>
    <td>Chromium 69 Ubuntu</td>
    <td>15 5 1439 هـ</td>
  </tr>
  <tr>
    <td>Firefox 63 Linux</td>
    <td>١٥ ٥ ١٤٣٩ هـ</td>
  </tr>
  <tr>
    <td colspan="2"><code>new Intl.DateTimeFormat('ar-u-ca-persian', { era: 'narrow' }).format(test_date)</code></td>
  </tr>
  <tr>
    <td>Chromium 69 Ubuntu</td>
    <td>12 11 1396 ه‍.ش</td>
  </tr>
  <tr>
    <td>Firefox 63 Linux</td>
    <td>١٢ ١١ ١٣٩٦ ه‍.ش</td>
  </tr>
  <tr>
    <td colspan="2"><code>new Intl.DateTimeFormat('ar', { era: 'short' }).format(test_date)</code></td>
  </tr>
  <tr>
    <td>Chromium 69 Ubuntu</td>
    <td>1 2 2018 م</td>
  </tr>
  <tr>
    <td>Firefox 63 Linux</td>
    <td>١ ٢ ٢٠١٨ م</td>
  </tr>
  <tr>
    <td colspan="2"><code>new Intl.DateTimeFormat('ar-u-ca-gregory', { era: 'short' }).format(test_date)</code></td>
  </tr>
  <tr>
    <td>Chromium 69 Ubuntu</td>
    <td>1 2 2018 م</td>
  </tr>
  <tr>
    <td>Firefox 63 Linux</td>
    <td>١ ٢ ٢٠١٨ م</td>
  </tr>
  <tr>
    <td colspan="2"><code>new Intl.DateTimeFormat('ar-u-ca-islamic', { era: 'short' }).format(test_date)</code></td>
  </tr>
  <tr>
    <td>Chromium 69 Ubuntu</td>
    <td>15 5 1439 هـ</td>
  </tr>
  <tr>
    <td>Firefox 63 Linux</td>
    <td>١٥ ٥ ١٤٣٩ هـ</td>
  </tr>
  <tr>
    <td colspan="2"><code>new Intl.DateTimeFormat('ar-u-ca-persian', { era: 'short' }).format(test_date)</code></td>
  </tr>
  <tr>
    <td>Chromium 69 Ubuntu</td>
    <td>12 11 1396 ه‍.ش</td>
  </tr>
  <tr>
    <td>Firefox 63 Linux</td>
    <td>١٢ ١١ ١٣٩٦ ه‍.ش</td>
  </tr>
  <tr>
    <td colspan="2"><code>new Intl.DateTimeFormat('ar', { hour: '2-digit' }).format(test_date)</code></td>
  </tr>
  <tr>
    <td>Chromium 69 Ubuntu</td>
    <td>3 ص</td>
  </tr>
  <tr>
    <td>Firefox 63 Linux</td>
    <td>٣ ص</td>
  </tr>
  <tr>
    <td colspan="2"><code>new Intl.DateTimeFormat('ar-u-ca-gregory', { hour: '2-digit' }).format(test_date)</code></td>
  </tr>
  <tr>
    <td>Chromium 69 Ubuntu</td>
    <td>3 ص</td>
  </tr>
  <tr>
    <td>Firefox 63 Linux</td>
    <td>٣ ص</td>
  </tr>
  <tr>
    <td colspan="2"><code>new Intl.DateTimeFormat('ar-u-ca-islamic', { hour: '2-digit' }).format(test_date)</code></td>
  </tr>
  <tr>
    <td>Chromium 69 Ubuntu</td>
    <td>3 ص</td>
  </tr>
  <tr>
    <td>Firefox 63 Linux</td>
    <td>٣ ص</td>
  </tr>
  <tr>
    <td colspan="2"><code>new Intl.DateTimeFormat('ar-u-ca-persian', { hour: '2-digit' }).format(test_date)</code></td>
  </tr>
  <tr>
    <td>Chromium 69 Ubuntu</td>
    <td>3 ص</td>
  </tr>
  <tr>
    <td>Firefox 63 Linux</td>
    <td>٣ ص</td>
  </tr>
  <tr>
    <td colspan="2"><code>new Intl.DateTimeFormat('ar', { hour: 'numeric' }).format(test_date)</code></td>
  </tr>
  <tr>
    <td>Chromium 69 Ubuntu</td>
    <td>3 ص</td>
  </tr>
  <tr>
    <td>Firefox 63 Linux</td>
    <td>٣ ص</td>
  </tr>
  <tr>
    <td colspan="2"><code>new Intl.DateTimeFormat('ar-u-ca-gregory', { hour: 'numeric' }).format(test_date)</code></td>
  </tr>
  <tr>
    <td>Chromium 69 Ubuntu</td>
    <td>3 ص</td>
  </tr>
  <tr>
    <td>Firefox 63 Linux</td>
    <td>٣ ص</td>
  </tr>
  <tr>
    <td colspan="2"><code>new Intl.DateTimeFormat('ar-u-ca-islamic', { hour: 'numeric' }).format(test_date)</code></td>
  </tr>
  <tr>
    <td>Chromium 69 Ubuntu</td>
    <td>3 ص</td>
  </tr>
  <tr>
    <td>Firefox 63 Linux</td>
    <td>٣ ص</td>
  </tr>
  <tr>
    <td colspan="2"><code>new Intl.DateTimeFormat('ar-u-ca-persian', { hour: 'numeric' }).format(test_date)</code></td>
  </tr>
  <tr>
    <td>Chromium 69 Ubuntu</td>
    <td>3 ص</td>
  </tr>
  <tr>
    <td>Firefox 63 Linux</td>
    <td>٣ ص</td>
  </tr>
  <tr>
    <td colspan="2"><code>new Intl.DateTimeFormat('ar', { minute: '2-digit' }).format(test_date)</code></td>
  </tr>
  <tr>
    <td>Chromium 69 Ubuntu</td>
    <td>30</td>
  </tr>
  <tr>
    <td>Firefox 63 Linux</td>
    <td>٣٠</td>
  </tr>
  <tr>
    <td colspan="2"><code>new Intl.DateTimeFormat('ar-u-ca-gregory', { minute: '2-digit' }).format(test_date)</code></td>
  </tr>
  <tr>
    <td>Chromium 69 Ubuntu</td>
    <td>30</td>
  </tr>
  <tr>
    <td>Firefox 63 Linux</td>
    <td>٣٠</td>
  </tr>
  <tr>
    <td colspan="2"><code>new Intl.DateTimeFormat('ar-u-ca-islamic', { minute: '2-digit' }).format(test_date)</code></td>
  </tr>
  <tr>
    <td>Chromium 69 Ubuntu</td>
    <td>30</td>
  </tr>
  <tr>
    <td>Firefox 63 Linux</td>
    <td>٣٠</td>
  </tr>
  <tr>
    <td colspan="2"><code>new Intl.DateTimeFormat('ar-u-ca-persian', { minute: '2-digit' }).format(test_date)</code></td>
  </tr>
  <tr>
    <td>Chromium 69 Ubuntu</td>
    <td>30</td>
  </tr>
  <tr>
    <td>Firefox 63 Linux</td>
    <td>٣٠</td>
  </tr>
  <tr>
    <td colspan="2"><code>new Intl.DateTimeFormat('ar', { minute: 'numeric' }).format(test_date)</code></td>
  </tr>
  <tr>
    <td>Chromium 69 Ubuntu</td>
    <td>30</td>
  </tr>
  <tr>
    <td>Firefox 63 Linux</td>
    <td>٣٠</td>
  </tr>
  <tr>
    <td colspan="2"><code>new Intl.DateTimeFormat('ar-u-ca-gregory', { minute: 'numeric' }).format(test_date)</code></td>
  </tr>
  <tr>
    <td>Chromium 69 Ubuntu</td>
    <td>30</td>
  </tr>
  <tr>
    <td>Firefox 63 Linux</td>
    <td>٣٠</td>
  </tr>
  <tr>
    <td colspan="2"><code>new Intl.DateTimeFormat('ar-u-ca-islamic', { minute: 'numeric' }).format(test_date)</code></td>
  </tr>
  <tr>
    <td>Chromium 69 Ubuntu</td>
    <td>30</td>
  </tr>
  <tr>
    <td>Firefox 63 Linux</td>
    <td>٣٠</td>
  </tr>
  <tr>
    <td colspan="2"><code>new Intl.DateTimeFormat('ar-u-ca-persian', { minute: 'numeric' }).format(test_date)</code></td>
  </tr>
  <tr>
    <td>Chromium 69 Ubuntu</td>
    <td>30</td>
  </tr>
  <tr>
    <td>Firefox 63 Linux</td>
    <td>٣٠</td>
  </tr>
  <tr>
    <td colspan="2"><code>new Intl.DateTimeFormat('ar', { month: '2-digit' }).format(test_date)</code></td>
  </tr>
  <tr>
    <td>Chromium 69 Ubuntu</td>
    <td>02</td>
  </tr>
  <tr>
    <td>Firefox 63 Linux</td>
    <td>٠٢</td>
  </tr>
  <tr>
    <td colspan="2"><code>new Intl.DateTimeFormat('ar-u-ca-gregory', { month: '2-digit' }).format(test_date)</code></td>
  </tr>
  <tr>
    <td>Chromium 69 Ubuntu</td>
    <td>02</td>
  </tr>
  <tr>
    <td>Firefox 63 Linux</td>
    <td>٠٢</td>
  </tr>
  <tr>
    <td colspan="2"><code>new Intl.DateTimeFormat('ar-u-ca-islamic', { month: '2-digit' }).format(test_date)</code></td>
  </tr>
  <tr>
    <td>Chromium 69 Ubuntu</td>
    <td>05</td>
  </tr>
  <tr>
    <td>Firefox 63 Linux</td>
    <td>٠٥</td>
  </tr>
  <tr>
    <td colspan="2"><code>new Intl.DateTimeFormat('ar-u-ca-persian', { month: '2-digit' }).format(test_date)</code></td>
  </tr>
  <tr>
    <td>Chromium 69 Ubuntu</td>
    <td>11</td>
  </tr>
  <tr>
    <td>Firefox 63 Linux</td>
    <td>١١</td>
  </tr>
  <tr>
    <td colspan="2"><code>new Intl.DateTimeFormat('ar', { month: 'numeric' }).format(test_date)</code></td>
  </tr>
  <tr>
    <td>Chromium 69 Ubuntu</td>
    <td>2</td>
  </tr>
  <tr>
    <td>Firefox 63 Linux</td>
    <td>٢</td>
  </tr>
  <tr>
    <td colspan="2"><code>new Intl.DateTimeFormat('ar-u-ca-gregory', { month: 'numeric' }).format(test_date)</code></td>
  </tr>
  <tr>
    <td>Chromium 69 Ubuntu</td>
    <td>2</td>
  </tr>
  <tr>
    <td>Firefox 63 Linux</td>
    <td>٢</td>
  </tr>
  <tr>
    <td colspan="2"><code>new Intl.DateTimeFormat('ar-u-ca-islamic', { month: 'numeric' }).format(test_date)</code></td>
  </tr>
  <tr>
    <td>Chromium 69 Ubuntu</td>
    <td>5</td>
  </tr>
  <tr>
    <td>Firefox 63 Linux</td>
    <td>٥</td>
  </tr>
  <tr>
    <td colspan="2"><code>new Intl.DateTimeFormat('ar-u-ca-persian', { month: 'numeric' }).format(test_date)</code></td>
  </tr>
  <tr>
    <td>Chromium 69 Ubuntu</td>
    <td>11</td>
  </tr>
  <tr>
    <td>Firefox 63 Linux</td>
    <td>١١</td>
  </tr>
  <tr>
    <td colspan="2"><code>new Intl.DateTimeFormat('ar', { second: '2-digit' }).format(test_date)</code></td>
  </tr>
  <tr>
    <td>Chromium 69 Ubuntu</td>
    <td>0</td>
  </tr>
  <tr>
    <td>Firefox 63 Linux</td>
    <td>٠</td>
  </tr>
  <tr>
    <td colspan="2"><code>new Intl.DateTimeFormat('ar-u-ca-gregory', { second: '2-digit' }).format(test_date)</code></td>
  </tr>
  <tr>
    <td>Chromium 69 Ubuntu</td>
    <td>0</td>
  </tr>
  <tr>
    <td>Firefox 63 Linux</td>
    <td>٠</td>
  </tr>
  <tr>
    <td colspan="2"><code>new Intl.DateTimeFormat('ar-u-ca-islamic', { second: '2-digit' }).format(test_date)</code></td>
  </tr>
  <tr>
    <td>Chromium 69 Ubuntu</td>
    <td>0</td>
  </tr>
  <tr>
    <td>Firefox 63 Linux</td>
    <td>٠</td>
  </tr>
  <tr>
    <td colspan="2"><code>new Intl.DateTimeFormat('ar-u-ca-persian', { second: '2-digit' }).format(test_date)</code></td>
  </tr>
  <tr>
    <td>Chromium 69 Ubuntu</td>
    <td>0</td>
  </tr>
  <tr>
    <td>Firefox 63 Linux</td>
    <td>٠</td>
  </tr>
  <tr>
    <td colspan="2"><code>new Intl.DateTimeFormat('ar', { second: 'numeric' }).format(test_date)</code></td>
  </tr>
  <tr>
    <td>Chromium 69 Ubuntu</td>
    <td>0</td>
  </tr>
  <tr>
    <td>Firefox 63 Linux</td>
    <td>٠</td>
  </tr>
  <tr>
    <td colspan="2"><code>new Intl.DateTimeFormat('ar-u-ca-gregory', { second: 'numeric' }).format(test_date)</code></td>
  </tr>
  <tr>
    <td>Chromium 69 Ubuntu</td>
    <td>0</td>
  </tr>
  <tr>
    <td>Firefox 63 Linux</td>
    <td>٠</td>
  </tr>
  <tr>
    <td colspan="2"><code>new Intl.DateTimeFormat('ar-u-ca-islamic', { second: 'numeric' }).format(test_date)</code></td>
  </tr>
  <tr>
    <td>Chromium 69 Ubuntu</td>
    <td>0</td>
  </tr>
  <tr>
    <td>Firefox 63 Linux</td>
    <td>٠</td>
  </tr>
  <tr>
    <td colspan="2"><code>new Intl.DateTimeFormat('ar-u-ca-persian', { second: 'numeric' }).format(test_date)</code></td>
  </tr>
  <tr>
    <td>Chromium 69 Ubuntu</td>
    <td>0</td>
  </tr>
  <tr>
    <td>Firefox 63 Linux</td>
    <td>٠</td>
  </tr>
  <tr>
    <td colspan="2"><code>new Intl.DateTimeFormat('ar', { timeZoneName: 'long' }).format(test_date)</code></td>
  </tr>
  <tr>
    <td>Chromium 69 Ubuntu</td>
    <td>1‏/2‏/2018 توقيت إيران الرسمي</td>
  </tr>
  <tr>
    <td>Firefox 63 Linux</td>
    <td>١‏/٢‏/٢٠١٨ توقيت إيران الرسمي</td>
  </tr>
  <tr>
    <td colspan="2"><code>new Intl.DateTimeFormat('ar-u-ca-gregory', { timeZoneName: 'long' }).format(test_date)</code></td>
  </tr>
  <tr>
    <td>Chromium 69 Ubuntu</td>
    <td>1‏/2‏/2018 توقيت إيران الرسمي</td>
  </tr>
  <tr>
    <td>Firefox 63 Linux</td>
    <td>١‏/٢‏/٢٠١٨ توقيت إيران الرسمي</td>
  </tr>
  <tr>
    <td colspan="2"><code>new Intl.DateTimeFormat('ar-u-ca-islamic', { timeZoneName: 'long' }).format(test_date)</code></td>
  </tr>
  <tr>
    <td>Chromium 69 Ubuntu</td>
    <td>15‏/5‏/1439 توقيت إيران الرسمي</td>
  </tr>
  <tr>
    <td>Firefox 63 Linux</td>
    <td>١٥‏/٥‏/١٤٣٩ توقيت إيران الرسمي</td>
  </tr>
  <tr>
    <td colspan="2"><code>new Intl.DateTimeFormat('ar-u-ca-persian', { timeZoneName: 'long' }).format(test_date)</code></td>
  </tr>
  <tr>
    <td>Chromium 69 Ubuntu</td>
    <td>12‏/11‏/1396 توقيت إيران الرسمي</td>
  </tr>
  <tr>
    <td>Firefox 63 Linux</td>
    <td>١٢‏/١١‏/١٣٩٦ توقيت إيران الرسمي</td>
  </tr>
  <tr>
    <td colspan="2"><code>new Intl.DateTimeFormat('ar', { timeZoneName: 'short' }).format(test_date)</code></td>
  </tr>
  <tr>
    <td>Chromium 69 Ubuntu</td>
    <td>1‏/2‏/2018 غرينتش+3:30</td>
  </tr>
  <tr>
    <td>Firefox 63 Linux</td>
    <td>١‏/٢‏/٢٠١٨ غرينتش+٣:٣٠</td>
  </tr>
  <tr>
    <td colspan="2"><code>new Intl.DateTimeFormat('ar-u-ca-gregory', { timeZoneName: 'short' }).format(test_date)</code></td>
  </tr>
  <tr>
    <td>Chromium 69 Ubuntu</td>
    <td>1‏/2‏/2018 غرينتش+3:30</td>
  </tr>
  <tr>
    <td>Firefox 63 Linux</td>
    <td>١‏/٢‏/٢٠١٨ غرينتش+٣:٣٠</td>
  </tr>
  <tr>
    <td colspan="2"><code>new Intl.DateTimeFormat('ar-u-ca-islamic', { timeZoneName: 'short' }).format(test_date)</code></td>
  </tr>
  <tr>
    <td>Chromium 69 Ubuntu</td>
    <td>15‏/5‏/1439 غرينتش+3:30</td>
  </tr>
  <tr>
    <td>Firefox 63 Linux</td>
    <td>١٥‏/٥‏/١٤٣٩ غرينتش+٣:٣٠</td>
  </tr>
  <tr>
    <td colspan="2"><code>new Intl.DateTimeFormat('ar-u-ca-persian', { timeZoneName: 'short' }).format(test_date)</code></td>
  </tr>
  <tr>
    <td>Chromium 69 Ubuntu</td>
    <td>12‏/11‏/1396 غرينتش+3:30</td>
  </tr>
  <tr>
    <td>Firefox 63 Linux</td>
    <td>١٢‏/١١‏/١٣٩٦ غرينتش+٣:٣٠</td>
  </tr>
  <tr>
    <td colspan="2"><code>new Intl.DateTimeFormat('ar', { year: '2-digit' }).format(test_date)</code></td>
  </tr>
  <tr>
    <td>Chromium 69 Ubuntu</td>
    <td>18</td>
  </tr>
  <tr>
    <td>Firefox 63 Linux</td>
    <td>١٨</td>
  </tr>
  <tr>
    <td colspan="2"><code>new Intl.DateTimeFormat('ar-u-ca-gregory', { year: '2-digit' }).format(test_date)</code></td>
  </tr>
  <tr>
    <td>Chromium 69 Ubuntu</td>
    <td>18</td>
  </tr>
  <tr>
    <td>Firefox 63 Linux</td>
    <td>١٨</td>
  </tr>
  <tr>
    <td colspan="2"><code>new Intl.DateTimeFormat('ar-u-ca-islamic', { year: '2-digit' }).format(test_date)</code></td>
  </tr>
  <tr>
    <td>Chromium 69 Ubuntu</td>
    <td>39</td>
  </tr>
  <tr>
    <td>Firefox 63 Linux</td>
    <td>٣٩</td>
  </tr>
  <tr>
    <td colspan="2"><code>new Intl.DateTimeFormat('ar-u-ca-persian', { year: '2-digit' }).format(test_date)</code></td>
  </tr>
  <tr>
    <td>Chromium 69 Ubuntu</td>
    <td>96</td>
  </tr>
  <tr>
    <td>Firefox 63 Linux</td>
    <td>٩٦</td>
  </tr>
  <tr>
    <td colspan="2"><code>new Intl.DateTimeFormat('ar', { year: 'numeric' }).format(test_date)</code></td>
  </tr>
  <tr>
    <td>Chromium 69 Ubuntu</td>
    <td>2018</td>
  </tr>
  <tr>
    <td>Firefox 63 Linux</td>
    <td>٢٠١٨</td>
  </tr>
  <tr>
    <td colspan="2"><code>new Intl.DateTimeFormat('ar-u-ca-gregory', { year: 'numeric' }).format(test_date)</code></td>
  </tr>
  <tr>
    <td>Chromium 69 Ubuntu</td>
    <td>2018</td>
  </tr>
  <tr>
    <td>Firefox 63 Linux</td>
    <td>٢٠١٨</td>
  </tr>
  <tr>
    <td colspan="2"><code>new Intl.DateTimeFormat('ar-u-ca-islamic', { year: 'numeric' }).format(test_date)</code></td>
  </tr>
  <tr>
    <td>Chromium 69 Ubuntu</td>
    <td>1439</td>
  </tr>
  <tr>
    <td>Firefox 63 Linux</td>
    <td>١٤٣٩</td>
  </tr>
  <tr>
    <td colspan="2"><code>new Intl.DateTimeFormat('ar-u-ca-persian', { year: 'numeric' }).format(test_date)</code></td>
  </tr>
  <tr>
    <td>Chromium 69 Ubuntu</td>
    <td>1396</td>
  </tr>
  <tr>
    <td>Firefox 63 Linux</td>
    <td>١٣٩٦</td>
  </tr>
</table>
