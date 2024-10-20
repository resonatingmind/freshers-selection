import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  return (
    <>
      <img className='logo' src='/E-Cell-Logo-iit-karagpur.png'></img>
      <div style={{marginTop:"20px"}}>
        <h2>Welcome Aboard!</h2>
      </div>
    
    <p style={{marginTop:"40px"}}>Core Team</p>

<table className="styled-table">
    <thead>
        <tr>
            <th>S No.</th>
            <th>Name</th>
            <th>Roll No.</th>
        </tr>
    </thead>
    <tbody>
<tr>
    <td>1</td>
    <td>Aayushi Umariya</td>
    <td>24GG10005</td>
</tr>
<tr>
    <td>2</td>
    <td>Achintya Ranjan</td>
    <td>24EC10055</td>
</tr>
<tr>
    <td>3</td>
    <td>Aditya S Arakali</td>
    <td>24AG10012</td>
</tr>
<tr>
    <td>4</td>
    <td>Amandeep Suryawanshi</td>
    <td>24AR10017</td>
</tr>
<tr>
    <td>5</td>
    <td>Anany Porwal</td>
    <td>24MI10021</td>
</tr>
<tr>
    <td>6</td>
    <td>Anit Kumar</td>
    <td>24SD14001</td>
</tr>
<tr>
    <td>7</td>
    <td>Anjali Chenga</td>
    <td>24CE10004</td>
</tr>
<tr>
    <td>8</td>
    <td>Anshika singh</td>
    <td>24MI10022</td>
</tr>
<tr>
    <td>9</td>
    <td>Arush Sharma</td>
    <td>24MI10024</td>
</tr>
<tr>
    <td>10</td>
    <td>Aryan</td>
    <td>24GG10010</td>
</tr>
<tr>
    <td>11</td>
    <td>Ashish</td>
    <td>24cy10012</td>
</tr>
<tr>
    <td>12</td>
    <td>Aviral Agarwal</td>
    <td>24EC10065</td>
</tr>
<tr>
    <td>13</td>
    <td>Bhavesh Deshmukh</td>
    <td>24MI10035</td>
</tr>
<tr>
    <td>14</td>
    <td>Chaitanya ghuge</td>
    <td>24ME10075</td>
</tr>
<tr>
    <td>15</td>
    <td>D.N.Nikhil</td>
    <td>24EE10048</td>
</tr>
<tr>
    <td>16</td>
    <td>Daniyal Khan</td>
    <td>24mf10026</td>
</tr>
<tr>
    <td>17</td>
    <td>Deepanshu Olakh</td>
    <td>24CS10042</td>
</tr>
<tr>
    <td>18</td>
    <td>Dev Patel</td>
    <td>24MA10051</td>
</tr>
<tr>
    <td>19</td>
    <td>Devang C Paramar</td>
    <td>24MF10028</td>
</tr>
<tr>
    <td>20</td>
    <td>Devansh Paliwal</td>
    <td>24HS10007</td>
</tr>
<tr>
    <td>21</td>
    <td>Devesh Artani</td>
    <td>24CY10017</td>
</tr>
<tr>
    <td>22</td>
    <td>Divy Devendra Agrawal</td>
    <td>24BT10020</td>
</tr>
<tr>
    <td>23</td>
    <td>Ehina Gupta</td>
    <td>24MT10037</td>
</tr>
<tr>
    <td>24</td>
    <td>Gaurav Gupta</td>
    <td>24BT10023</td>
</tr>
<tr>
    <td>25</td>
    <td>Gentyal Abhinav</td>
    <td>24BT10025</td>
</tr>
<tr>
    <td>26</td>
    <td>Gopanshu Garg</td>
    <td>24MT10039</td>
</tr>
<tr>
    <td>27</td>
    <td>Harshita</td>
    <td>24MF10031</td>
</tr>
<tr>
    <td>28</td>
    <td>Ishika Agarwal</td>
    <td>24MI10048</td>
</tr>
<tr>
    <td>29</td>
    <td>Jasmine Sahoo</td>
    <td>24IE10024</td>
</tr>
<tr>
    <td>30</td>
    <td>Jateen Ramteke</td>
    <td>24HS10027</td>
</tr>
<tr>
    <td>31</td>
    <td>Kamlesh Patil</td>
    <td>24MI10052</td>
</tr>
<tr>
    <td>32</td>
    <td>Kripanshu</td>
    <td>24AR10005</td>
</tr>
<tr>
    <td>33</td>
    <td>Mani Barathi AG</td>
    <td>24PH10026</td>
</tr>
<tr>
    <td>34</td>
    <td>Manish Paul</td>
    <td>24GG10024</td>
</tr>
<tr>
    <td>35</td>
    <td>Manthan Pankhaniya</td>
    <td>24ME10125</td>
</tr>
<tr>
    <td>36</td>
    <td>Netra</td>
    <td>24CH10078</td>
</tr>
<tr>
    <td>37</td>
    <td>Nivesh Sakhare</td>
    <td>24MF10054</td>
</tr>
<tr>
    <td>38</td>
    <td>Palak Shrivastava</td>
    <td>24MI10073</td>
</tr>
<tr>
    <td>39</td>
    <td>Paritosh Singh</td>
    <td>24MT10061</td>
</tr>
<tr>
    <td>40</td>
    <td>Prajyot Pating More</td>
    <td>24GG10028</td>
</tr>
<tr>
    <td>41</td>
    <td>Rehan Hamid Wagadia</td>
    <td>24AG10061</td>
</tr>
<tr>
    <td>42</td>
    <td>Revanth Kumar</td>
    <td>24EE10062</td>
</tr>
<tr>
    <td>43</td>
    <td>Ritesh Thosare</td>
    <td>24MI10086</td>
</tr>
<tr>
    <td>44</td>
    <td>Sarthak Umrao</td>
    <td>24SD12007</td>
</tr>
<tr>
    <td>45</td>
    <td>Sarvesh Mahajan</td>
    <td>24ma10060</td>
</tr>
<tr>
    <td>46</td>
    <td>Shivam Kumar</td>
    <td>24AR10034</td>
</tr>
<tr>
    <td>47</td>
    <td>Shivam Kumar</td>
    <td>24SD11005</td>
</tr>
<tr>
    <td>48</td>
    <td>Shradhanand Kumar</td>
    <td>24AR10035</td>
</tr>
<tr>
    <td>49</td>
    <td>Shravi Bansal</td>
    <td>24EC10130</td>
</tr>
<tr>
    <td>50</td>
    <td>Simarat Singh Ajmani</td>
    <td>24AE10055</td>
</tr>
<tr>
    <td>51</td>
    <td>Stuti Jain</td>
    <td>24MI10100</td>
</tr>
<tr>
    <td>52</td>
    <td>Swecha Sanjay</td>
    <td>24CE10113</td>
</tr>
<tr>
    <td>53</td>
    <td>Tanmay Mishra</td>
    <td>24NA10073</td>
</tr>
<tr>
    <td>54</td>
    <td>Tushant Raghav</td>
    <td>24NA10074</td>
</tr>
<tr>
    <td>55</td>
    <td>Uday Singh</td>
    <td>24CY10042</td>
</tr>
<tr>
    <td>56</td>
    <td>Varsha</td>
    <td>24HS10059</td>
</tr>
<tr>
    <td>57</td>
    <td>Vedant Pawar</td>
    <td>24NA10075</td>
</tr>
<tr>
    <td>58</td>
    <td>Vrinda Singh</td>
    <td>24MI10110</td>
</tr>
<tr>
    <td>59</td>
    <td>Yash Agrawal</td>
    <td>24AG10087</td>
</tr>
<tr>
    <td>60</td>
    <td>Yash Khandelwal</td>
    <td>24MI10111</td>
</tr>
    </tbody>
</table>

{/*Web Team*/}
<p style={{marginTop:"80px"}}>Web Team</p>
<table className="styled-table">
    <thead>
        <tr>
            <th>S No.</th>
            <th>Name</th>
            <th>Roll No.</th>
        </tr>
    </thead>
    <tbody>
    
<tr>
    <td>1</td>
    <td>Abhinav Tiwari</td>
    <td>24CS10077</td>
</tr>
<tr>
    <td>2</td>
    <td>Aryan Raut</td>
    <td>24CS10008</td>
</tr>
<tr>
    <td>3</td>
    <td>Ekaksh Soni</td>
    <td>24CH10061</td>
</tr>
<tr>
    <td>4</td>
    <td>Harsh Raj Dubey</td>
    <td>24MF10006</td>
</tr>
<tr>
    <td>5</td>
    <td>Harshit Kumar Gupta</td>
    <td>24CE10060</td>
</tr>
<tr>
    <td>6</td>
    <td>K. Sampath Rajiv</td>
    <td>24CS10103</td>
</tr>
<tr>
    <td>7</td>
    <td>KESHAV BAHETI</td>
    <td>24MA10043</td>
</tr>
<tr>
    <td>8</td>
    <td>Priyank Agarwal</td>
    <td>24AE10046</td>
</tr>
<tr>
    <td>9</td>
    <td>Puneeth Manohar</td>
    <td>24MA10055</td>
</tr>
<tr>
    <td>10</td>
    <td>Shrehan Raj Singh</td>
    <td>24CE10103</td>
</tr>
<tr>
    <td>11</td>
    <td>Shubh Prasad</td>
    <td>24AG10008</td>
</tr>
<tr>
    <td>12</td>
    <td>Sumit Raut</td>
    <td>24AE10058</td>
</tr>
<tr>
    <td>13</td>
    <td>Tanishq Verma</td>
    <td>24AR10008</td>
</tr>
<tr>
    <td>14</td>
    <td>Yash</td>
    <td>24CE10118</td>
</tr>

</tbody>
</table>

{/*Design Team*/}
<p style={{marginTop:"80px"}}>Design Team</p>
<table className="styled-table">
    <thead>
        <tr>
            <th>S No.</th>
            <th>Name</th>
            <th>Roll No.</th>
        </tr>
    </thead>
    <tbody>
    
<tr>
    <td>1</td>
    <td>Ayush Yadav</td>
    <td>24MI10006</td>
</tr>
<tr>
    <td>2</td>
    <td>Lakshya Jain</td>
    <td>24MI10061</td>
</tr>
<tr>
    <td>3</td>
    <td>Pratik Sirsath</td>
    <td>24MT10082</td>
</tr>
<tr>
    <td>4</td>
    <td>Raaga Murala</td>
    <td>24CS10114</td>
</tr>
<tr>
    <td>5</td>
    <td>Sanjeev Patel</td>
    <td>24SD12014</td>
</tr>
<tr>
    <td>6</td>
    <td>Shashi Kant</td>
    <td>24EC10022</td>
</tr>
<tr>
    <td>7</td>
    <td>Sohaam Swapna Kulkarni</td>
    <td>24AG10075</td>
</tr>
<tr>
    <td>8</td>
    <td>Soumili Mandal</td>
    <td>24MT10084</td>
</tr>
<tr>
    <td>9</td>
    <td>Srujan Nyamagoud</td>
    <td>24EX10041</td>
</tr>
<tr>
    <td>10</td>
    <td>Tanmay Nagpal</td>
    <td>24AE10060</td>
</tr>
<tr>
    <td>11</td>
    <td>Tugiti Likhitha</td>
    <td>24EE10104</td>
</tr>
<tr>
    <td>12</td>
    <td>Vinit Patil</td>
    <td>24IM10069</td>
</tr>

</tbody>
</table>

    </>
  )
}

export default App
