import "./Login.css"
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Box from "@mui/material/Box";

const Login = () => {
  const history = useNavigate();//to travel on Homepage after succesful Login 


  const [inputvalue, setinputvalue] = useState({
    email: "",
    password: "",
  });
//On Above i have Created usState and store initial object inside it

  console.log(inputvalue);
 //basically we have two input feild here for getting Onchange Data i have created getData function 
  const getdata = (e) => {
    // console.log(e.target.value);
    e.preventDefault();
    //To prevent default Behaviour of the Input

    const { value, name } = e.target;
    // console.log(value,name);

    setinputvalue(() => {
      return {
        ...inputvalue,
        [name]: value,
      };
    });
  };

  //onclick of Login button it will check enterd Email or passWord is correct or Not and also to check multiple cnditions i have created this AddData Function.
  const addData = (e) => {
    e.preventDefault();
//i have use Localstorage to get and matc data which we are used at the time of create Account.
    const getuserArr = localStorage.getItem("user");
    console.log(getuserArr);
//here i have destructuring email and password from inputvalue
//and check the conditions
    const { email, password } = inputvalue;

    if (email === "") {
      alert("email field is requred");
    } else if (!email.includes("@")) {
      alert("plz enter valid email addres");
    } else if (password === "") {
      alert("password field is requred");
    } else if (password.length < 5) {
      alert("password length greater five");
    } else {
      if (getuserArr && getuserArr.length) {
        const userdata = JSON.parse(getuserArr);//convert Json Data in to parse and adding filter property on them.
        const userlogin = userdata.filter((el, k) => {
          return el.email === email && el.password === password; //enterd email and password and stored email and password match or not
        });

        if (userlogin.length === 0) {
          alert("invalid details");
        } else {
          console.log("user login succesfulyy");

          localStorage.setItem("user_login", JSON.stringify(userlogin));

          history("/Home"); //if email and password match then travel on Home page
        }
      }
    }
  };
  return (
    <div className='main-Login'>

      <div className='left-Login'>
     <img className="img"src='data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHCBUVFBgVFRUYGRgYGhsYGxobGxobGR0YGxobGhgaGRobIS0kGyMqHxoaJTclKi4xNDQ0GyM6PzozPi0zNDEBCwsLEA8QHRISHTMjIyMzMzMxMzM0MzM1MzMxMzMzMzMzMzMxMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzM//AABEIARMAtwMBIgACEQEDEQH/xAAbAAABBQEBAAAAAAAAAAAAAAAEAAECAwUGB//EAD8QAAIBAwMCAwUGBAQFBQEAAAECEQADIQQSMQVBIlFhBhNxgZEyobHB4fAUQlLRByNi8RVygqKyJDM0g5Jk/8QAGQEAAwEBAQAAAAAAAAAAAAAAAAECAwQF/8QAKREAAwEAAQQBAwMFAQAAAAAAAAERAiEDEjFBYSJRcQQyoRNCgcHwFP/aAAwDAQACEQMRAD8A8xE05nk96eKfEfviu85iFWIaZRU4poCYar7L0OtXWloRLLs81C5zVyeVWG3VkAoFTe0RHrmrgsVYqA0BQQ26Vu3JrSS2Dgc09uyJoCmc1qJEfPNQK/KtN7U0M9nNAUHVKruUQyVWyZoCg8VIDnP60RcsgHmar20QfcRU0xFWVECgKRQVYUp1SpNEU4JsGZaVSalUlUF2Grk0xiY/vWgmnABx+/Sp3FAUfdNT2h3GcNNgE9yR64jP3/dUl05PajjeXbgSfWnTPHeqgu4AFurESiWsGTgmPQ0kSacFRlgVcrVI6UzgFoEmBMD1qo0mIcQadUqxdOwUNGD3+75VNTQMggqxDU1Xd5AdycKB5k9qpfUov+oz67eO8Z+/5UrAjZYWqO2ao/i2zCoZG1RBEH+qZ/EkfKnGtCsFcBTGSG3LOT24ER3P9hbQPDJta5mhikGi7pMA9iJB7EeYodhVJiIvB9BVRFXBaTH0pgULbBOTHrzVptqOM+Zj8Kamck0xCIHPeoGpbTTMMUAVhRT08SfCOPv9f0pUh0vA5Bn/AHp7zjbmSAIFQdsk/dVNxzx/tSApQ1paW40YX99xUdBo90knA+vpWrfuQwVGO0KCSRBmMiM8H60kDZIE7R4PQ80CpG/K4n4Gi31OBBiPv5qL6gMMAzPyApiKSkE7SRMjyJHrTIkff9+DRAskgmDAwT2mn93TCglwe7IuDg+B17sp+OOw+BCnkURcvadfsl3J4G1VA9GaZOCOB5+lXLakHGOKH/4OpOCwHl+pqGhpgup1RcGSFX+lQAOPDI/m45PmfOgktOZhGPyP4102m6MAJCjHcwTketXjQmaURVOPa2VHi3LMxIIE+WamykiAZESe3YTPnmuy/gZEAVmdV9nrltS62yqiCymABJjcATjnI7c+dTwUnTB0+r92BbYgpuJ7ysjsTx5x3rU9yORkdvyNYOqMsTAyeOAPQDsK1uk62bbbwTs794Jx+fHYU1qC1km9uoqkevp+FXvq7f5yf2apbUA/ZBjn1+gk1S0iHlkUtsDMVEsAeKORd6kgnHOOPjQV+weZmqohI4JMVS9kEDt++9PbEVLbTAYoIHb4UqZjTUUCpEoptKymGUg+UQfjT6cKrjepYZkDnir9NyM9+acBsu0FhjIIgQefOP8AeqWQkme3etceUwMzxx3oZlBJkc8Rjv3x5TUpiAtk8D6fgPuozS6Xie/AH0/fwoixpgSoEk9xHecRByIjyqrqXXLNu4+nQhWRijOykncphghGVyCJn9c+p1FlUvp9N6cNG7024oyFQHksYJx5ZaOaz3eypINw/JJH1kULc1krhw5jgHH0HFYXUL5PYDEd/wC34RXMv1Gn8HX/AObOfPJ2mksW7gPu7ivGSBhgPODn6Uaml9McgR2Oee9ebaDUNbfcDEd/WvQPZ/rgd4wVYRsM/bH2YJyclRPMTzAql1n7M9dFejUSx6VaumJgDJPatddKr21ZAYIBIM7lnOQfp86H6hqBYUwpL5EiIUxMZ5MfjVd98GfY0+SrUKli2zEguPXC894MfP18q4rqPVYsssghySWkE8yRIOPzoXqXV7jkb3MdoB+Bic9s1i6vWsygEyFmMACT3gcmpn3NVwuAS/cU8fOc571LQagi4Co4GR22jJLT2xmcUJvMHOfvz60vftESY8pxPnFaXgmBepbxssmASAe+O/0q7S6iPCcf+J+P9xQKOGMk8iCflANTckEA8jEjy8wamgdRplO33ijA5z4Y7hu4Hrkcd6vWyCpMQCJ2kGYInv8Aj6UL0W4CQN8GYA54GccRzz2JrdsWwFWFK44OSJJMT+HpWmdGW8nPvp6rNquiu6cHihm0dV3EQxLlulWq2kEZBnt+dKjuCGXb07bd+I3bR4gGmAZ28kQeaO0+lkAzx2oe0uf3FaenYR5se3wrXXBKZYiFiRun++P38qNWxIUFQNvpk+pptLpzMnBrS9y2SKx0y0U6AKt1JHh3rIHMbhNGaz2Z0bqwa2C7ksz/AMxdjLMT8SabTafIxkEEn5zWd1L2sW3eewLLuUkMZ2jHO0QS3xwPjXF+obbUO79L2x04Hrfs6tm4dp8Paf8Aess3AoIYvPaCYHpFel3dHb1to3IZRkAnBrz/AFPStrkHKqc7QfsjmTwKjOjTWIA7txxx3JMAeYzW10jUqoAAZnBJVl8Jkg+BWPniTHw8jm9Qtp7tHVNs8wxI7xg/ZbGYjkYobTakhsYg/T41Xonwz3f2Y6wbmle4QNwuMJ8/Cr7288sa5Lq3WSSwMdzzODmfTEY/UUf0HXrc08KQCftx6jJEfD8PKuV63aKEgbQpMkg7mJyOfPk/Pk1r05DLqeTK6ndnzInBHr6dqBe/gAZBkjueYz5cTVOqfOCfwoWTzTYkX3k7/v7qpIpbqiKKELkfEQsH0z9eaNeySN3lH0rOtpmuq6VpCRx/LPpgEg/dRYglYT7K9OLDdMEnb9ASR9010V8ycCBAH0wPuor2X0qppSzCMXH9YkgfgayheG4TO2RMcxOY9YqsOtmfU4hdtnmKQXPMVVvnjA8vSpMsitUjKlLPSpMYpqfaFALFo/y844+Pb9K0tNpSAHK5MqB3kZJPf0ofTsSZXh4ZsjHYjPmSYH9qOsqu7GAK02yEg7TO2B99a1hZgE9qBsOABPHlWvoXQ8fpWG2aJB2l04A9TWb7TezVm9BLNbcgS6GGZRyN3z/CtlHXj5VkdRsJauTbtMfeLlveDahXkBXbwzg+EGY7VxdVv0d36VZrTOf61rlRBZtrtRQFUDsBgVxep2I03C2xvC8ZJQ/aAEjtPeui6vqlUnGe2K47qG64c9zgVng6Oo74Aus9SFwhUUoi8L+ZAwPhnk5M1lI9Ha7SFaBtHPE1qjnbp0nsz1trLwcoYnzHqK7vqekS8ouWwG8ORIhsyW28gj4/GvKVvFSCAvyj866v2e6rG5DJnKnyPl8P7RWmHGTpVGd1fp5RjKkCSZJ/TI44rIK11fU3JBa4Jk4P+kzIicc1zV0Ccfd3+taMzQMalbBnFM1T09zawxUjL7DkH1+E/v8ASu09k+opcYpthwrE7eDj7QB79vnWFfCiydsDeIn/AE9wfn5UD0Qbb9smZ3owjvDg0m6gSh65e0/u9IyKSJCoI/8A04/EH6Vzo0p9a7XX6WeIjyGImCT8fWsnUac5nljJPefjUY6k4FvFdMNbFWXbkAny44+EmPL8SKbXgrj6nvmsk3ea6em7yYaUJF85pVSrUq15IMw3zEdj+I/QmtTQ9QbG9SQTG6DOMnI5In8KybCkvG0tzIAz8flzRWmf7K5IUlsHziSMeQFavkR0+msvIz+X41s6ay2Ix+8igtFfUKuZkDJ5itrTurDGPSuLqNmmUFaa14SS/HaMmfWiX0vvEgFZBBBeSAYInHoTWUesWEYK11FmIJPhMmMNxg4OeTW2kcA5rj26dec6y02oZ1j2X08u92bzERnwqoOPAuSTnk1571X2fNq8VOQDg+Y7H5ivWlHcmsX2q0ilEuRlTsP/ACtMfQ/+RrN+KjbG64/Z5ZrenbhxXLdQ6ZctndBj07V6k+khSxwDx8P15+lZGs0sgkkD48n5VrjX3FvMPNdxNH6B9rAH5fH9/lWjr+lISShCn1wp+PlQKIUO25ieDz+FaoybNvqKO6K6lirLn+kMOQR2ODFYDoZzWxpNYPd7GzBJBHM+nn9RQGpt5JGZJiMz+da+jP2AtSX6VJgaZeallGlprhcC2BMZPf5UX0kKupt27ilSzptaCcMwjwj7XyzjvWXoy28bOe017L/htprlwi7dUL7lWQCGVw1xlZpnBB2KcHuRGZqdODSp1upsjyH2jHn5x9BWXrdMD8q1euapbbacH+e7s+tu4B/3MtDXQDP3d6wzn2VqHI9V0cnnA7fpWDc0hFdxqdLOYPGKy9RoSZMRH1+ldfT2kjm3ms5uzo6VbtvSbTlZ9Bn54pVr/UJ7DhLDsJAJypTv9luQPiCR8GNGaS0v8ykzhec9sRzQFhs8VqaVMj4966deDH2dFotJO0ASAI5AjyBzg/H1o+wjIYP7+BFDaG6VYTtE4M5X0DY8wPurcTUvdcW4QQGYBQAQAQGLEHElu8c15fV6zztZfs2yuTyj2g0L2HZ2FwMWG43drbw0lYbcQZAbg4A5znsv8MerNda5pnkbEV7asSSEBIYDd4iuUxJjPnXU6bpYZ2uXhvZj9lwDCL9gCRM8kz/WwziDNJ7P6a2/vUtlXnduFy5M9x9uIPdYgycZrH8npa6/fl1Q1BbjkgDzP51zfWNSLlxbYPgQb2HHiyM/L8a3Oq3nW0zqoOQueM4JI7geVcrplGXPnBM8wfP44rPb9C6SX7gLrV3am5vkPz+FcjrOpAKdzbR6ck+XrRvtF1gF2XsK43WvvaewwBW3SVM+o6y5uo2ySTInvH5CgupuGUEEN5MMY4yKGuLVanBHatzKeyxLpwat9/jj9fjQ4FPTTFBTUlWarIqy02fnQhs0ukmLgMZnH5/SJr3D2Tc27T4A2JJjvG5secwfurx7oGkL3VUCc5+Jr2KGs2UQCd87/hsY8+mKz3muFpzJl+2/UfFbZW3+6dLmCOQzNHePsf8AcK2tX1NP4u1bDBQ9q4c/17rbKDHJ2pcrg/aMMGiCAbefgTINQ198tdsXCSN7WnOTABKloPln7qp4USM0zvtW8/zgH0E/PPyrDuW2D5OJ5/QZrYvIPrQN5JxSyDMvUaja5KqI7Ez/AHpVZfselPVwRxSDaNpUDPMeKTE5+VG27gEHB9D+81SYDScznn6z84qJTv5z8K7m/RyQ2dNqQGAK49I+QEV0ugBW2Zt32Vzh7e6ViSMDmM8grMDmuO0IMjGJ+U1vpqAgUs9xQGA3IwiW8KIVZTyzDI7wO9cnXxVwdHQ1Ncmzf62qILZfc5BZSw2mB5j4fXOO1a/S9ULiAj4H0PlXlnWusi5cI3lgp8JbwtEZx6nNans91xkO2cMCCpmOCFOO4Jrg5zydukt+PJ3PUtV7wbB4UTM4lm7kdsZ+pxXDe0XWFtoVt4AlR8eSfr9a0td1HZbYSDPhEkbs8k+vIwK8967q9zEEz+/Ks+ldc6HtrPCMnU6ou5nMkZ9BVZPnVCDxD40Y6YruwojBgF2oWvxqV6o2afsXok60wpRTRVCJEVFTBqaimcUMEek+wOlD3C/aQfqK9I6uvvLYTeAVEjtAJgcH/SR9a8+/w7cJaLv9mQo5+0cj8IrqrjK77hcyI79lbcB8ZJ+pqHl91G3xDlPbAhbhUMSFCiD2lQR/esPV3mdV3QdqqojEKqgLOcmug6/pRcL3DdScAiD2wDiewisH3e4bRAAJB7/Of9qtEM7XUdXt20RGaW2WmjuRuEtgQMKT2ot743gZ4n09K43qNjdFw3AylUSF5UKoBAJxzn/qrX0V92bcSQCACJkCFj8p+dCwJ6NbUUqoa8eM0qfaLuOPIkH4iKgGPnPf+00ZAUf3oF7TAnbn4fXtzXQ2YJGjoMkev7/L763OraJbmmdCt5goDubJh5XxII2tK7oOBPh7ZrD6em2GOD61u2tzgqWI3d1JBBnk4OAJ7H4Vn1FUX03NHlTXWJi5IYfakHep7yDR/SdctvljPEfnS9odKx1V4icORmcgAQc5yIOc5rPsdPu3GPux9kSzMyqiL5u7EBR8eYxXNqTk6154OzbVe9t7d3qO+RXG9QDBzu/SB5Ufpr9tMNqFJ/0I7L/+mC/UA0Xc6U1+2z2it0INz7J3oPNkYBowcgEVmnlfBbTZzLHvWk4OzftO0j7UHb9eKzr+lYceIfvtXQdGa/dBY32SEuN4ru0nYjkEpMlAyifDGCBmqeu1UlZrhzl41Czwa7PpemR7qs9q291QrjYV91eR39wHIUQjLdZZIGQG8IIBIfUemXb7rcUW91xQVRZkgIz7ndEWzuIBwCOAIxUrqru54KfTc4ObJpCta97PXQGIZYDKqyHUszojqI2wpIdR4iIJgnigtb097W0PHiBIg9ge4OVMFTBEww+A0XUTcTM3hpVooNPbSaUVK2ef36fnW05IO89kdWBbNp5BJDAcDcvE+sbh8xV6atlubgBkyw9PDg/fWJ7NXZcAnIiJ+NdJc0I55x8Kt5pn3QztVcM3f9RkfDd+tLQpB+z9fx+6tNNACZIq8aKDKwKlZE9GV/CgzA5rW0SAAAdsU62RVqWoq0iWy51FKmuPApqAOZcH86VtCMiakniwTx9f3xTM4HHwpiCS88kfPNJtQ8ja2fSht2KmjRMEBjhROR/U4+AwD2Z1Pan6JChcVwd6I/ibJAIIBgEHmCADII5oL2g0enFsWgNijY/gJK77iBy7AkloBCjmADHJp1uEf2FCdVvSFWN0LjdMgEkwCCMcmDMTiufqdN1Pykb9PajVhj9I9mbmpvpYQgbpO/7Si2Ms4g+LyiRkgYqHS9d/D65TaZvdrd93k+JrZYIwaI+0smOxjyBrq/8AC4smtYEnabVwx23breY+VcRoLlu1dW7dBIRt6pkF2UyATEKu6CTzGADOOXWvr1h+EvH5OnHhP58mx7ZWFsay5bUggBGMdmdAzD0yZ/6qy9H1M2t0KrqyOhVuPGhQkEeJcHMETAHkRn6/XPfuvduNLuxZj6+noBAA8gKHJNaZz9CT54FrX1No01609qPcrbtncjEqGZmKMHQMbjN4QwBgQDAmYqS9d1BtC3v8O0rGxJKlDbILbdx8JIyfI8gEVdM0+n2m5qbjbd21bdsA3HIALEs2EUSok5MmODWnb6h06P8A4N0+R/iDI+QAFQ+1P9rZSrXmD9K6+zXkOqdWRXN1mZF3FkQFUDASA5t21Mc4kxWPrde9599wgsZ4AUCSWMAYyxJJ5JJJrXH/AAx8H+Ltev8Al3FHykGor0LT3GizrrZJwFuo9piT2kjb99JaynY1/wB8DedNSp/5MdTj4VJFMEjiJ+mfwrevexeuQlfdBypgi26uR8QDIqrR9JvWbiNfttaRHDsziPCuSqjlmIkADkmt11cNVNGP9PVjRV0q7suKfiD5V3drVgopI7fpXm+nuEkTgeQrs7N/cgM9q68cnP1ODaXVUm1Y86xmuVFrlV2mVNZ9YBVB6iR3rKuXCar3U+0KazdQJ/f77Uqz1Ro4MedKiIKW2rdJ7Q5q57oFVPfkVIyn3sDAxVYuzc3YICwJ8yTu/Bai5B5pKlOCoQl0Tx9KE1Q3GRV6KDQ1x8kT50tBk3vYlNuqx3tsPvWuAs9VvW2JS40E5RjvRhPDI0qR8q7n2MvD+LUT/I34rFecXO9eXrKfX3fsj0MtrpZ/LOh6v0m1e0n8fpU2BW2X7QkhHnDJOQpkY7TTe0en0+mOnC6cN73TWr7bnuCGfcGAhuPCOa2/YgD/AIZ1Mt9kowHlu923HzK/dWf7WXLJOi99buN/6LT+JHVIWXnwsjSee47VnjT7u3lpNmzkvCsMjpFrT3tWu61s04RmddzEqqWyWfdM/aGO2QKr9pemfwmrvWR9lGlJnKMA6Se/hIE+honp2kB0+pdGCB3WwnvHVTsn3rgsYBbwWgY/qPatL23te80+k1W5WY2zp7jKwZS6SVMjBJl/oK0Wptfbx/sh5uf5AvbPpdrTakW7QKobVt4LFvE6knJzFT6x023Yv6MWwf8AMtae+0knxO53ATwPCIHqas/xEedWh/8A57I+imrvaG4GvaD00ukHzDNRnTec1+mJ5jfw0a3VOn2dR1nWWLgh33Cw24qBfFpSqtHKnPlkDzrmej6UXLo99u92i3Hu58YS2pLqJyCTtX4sKO9sNQy9Tv3bZhluq6nyZUQj76N9qmtqGu2sfx+y8ViNigKzqf8AmvHd8E+t44SS/uSnwTqc30+TnLYBMxtzIAJMDsJOTHrWxobxA9Kx7HI+NayMIH7x2xXo4ycW2ENeqs36iQCO1Mi1ZBYrzVqCq1A28Znme3lFXI0fOgAhLhwO3r+lKqPfdqVAC1D1QbtDXLhJqAuVKKgUXqYv4jyoM3KiblMmBov+VBs00hcqk3B3mPpUaZeUbvsav/qi7MFS3bd2YmAACpyTjtXDW1LEKFJZiAqgSSTwAO5rTu3rZkN72DEqrqAY4mV/LvRnTdUyqz6a2mnA8Lam45dwSJ2o22AxHa2m6CPjXn6q09TyduJrKV8Gp168NFoV6epHvbhD39p+zkMVMdztUDzVSe4oL2q0dy4dLsQvs0llG252uu4sp8iJGPWsa6ljcSb11ySSWFpcscky90M0+ZANXafoPvlZtO63So3Nb2lLwUclUyHH/KxPpWecLMd55bbX3NHp6qn28P7BfUOmXfc6W1btM8I1x9gn/Nut9kgcsERB50T0T/O6frNKxAZCuptzzvUEOq+ZKqQAP6jXNWLUsoXDFlCkYMkgAgjjNGL0lmuXbalWNpGuDBh0UqZTylG3AHyjmKt5nDfyR3pupfBre1K/xFy1dsjelyzbGCPA6yHS4eEIPJaBGZip9eRf4nShHDoLWnRXHBCtE+nn86xv+HAB2ZgAnupO0n/3V3A47CM/cO1WaXp5a97liFfeUOJG4EhpM8YOc1a6ai54Sf8AIn1Hzx5n8BvtK06u78Vz/wDWnejetmbWkH9NmPuQ/mazNB043AhQ4e6lrKnBcTuMTgVLT2P8tLnZ2dRjugtt4jPf3g+hrXGc/Tz+3gy1tvuc8kLCZHxoyKqQZFXMfKuxHMyIq8N61Uv1pRToi73lR95VcU4pUIW2vEYkD1JxSqhmpqVHCuaZUmqA9SF6hFQuKRVZaoNfJqv3lJsULt1V3XxTFscGoE4pNlJAjrzWz7WsqPb09vCWLSD/AJrlxBcuOfMksB/01muoqOu1bXNu+CUUIGjxFR9kMeGieYn1wK5t4b0n6VNs6ia+4d7MdGGqv+7ZiqIjXHIjcVWPCs4kkj4AE9qq9ndUV1tlkG3ddVQAThXYJtk5Phatf2Acrcvf6rRQ4n7R+7MZrC6bcuacrfFptyDwMyHYrkRuaRBInA84PaDg29a3n4SSNsrtzl/LYf7Q3Et67UFONzkREC49vxfDa7sfTbFB2+olSHWQ620QNAjdbuKyNznwIi/Ks+47EsxJLEliTkljkkzySc10XtHss3hbt2rQX3dt821J3MgLc+var7e2ZarhFt1YqCXddbb3ilGVLhteFSJVbalSoJ9DAOfh2qFjqEaj37CSbjXCB5sSxAn1NF9CNp9Sbt62gsoA9y2B4drOlpVXyO51afRqttdJFp9ZuXe2lUFF5UhnCi44HKqhVo4O4Tiq7sqpr0Lt040/YH0zXi2EBBOy/bumDErb5X4moWrw90lvMo1xpxB3raUDnzt/f6VC1riBDWrT+IMCbaKcA4m2FO0kgkf6fU1uaZEfQXbxtWw6XbaKwQDwttJBHB5OfhV/t5nsmVSmXbarg9Uvqd8eBFgQdgiTJMnPMQPLFMDXRnTnJi0EM9SS5QjMar94adJhos4qDmgvf0vf0UcCWalQ5uUqKEBJpwagGqUippcHLGluqtmqQbtSoQmbtRZ6iTUS1AQRaq2p6U0hnWf4eW91y94tu22p+Pi4rlNDqHtlXRmVgBlTHyMcj0rr/wDDnb7zUTgCyTPHE8/vtXHJwPgPwrDOLvV9w11qZU9U6brfT7V3RLrrKhGHg1FtQFQMSVDqBgeLaCByHQwDukn2xa0mrUPaW4PdWSTudCR7scbWgY9KI6NpyOi6x2+w1zasmJYmyqkT/qHPahfbJRqNUbtq5p2Q27a//J0ywVWCIe4D91ThfV9XqpfgrT449xsB02kT+CJe6lo372Ny3GDW7CkHb7tGIG+7/N/QOYrZ65rbli5pddprgPvLXu3YBtjvahXDhgGMiBBAPgNZvVdC9z3Vuy1h0sadV8Oq02WAe9qHCG5u+0zzjhJ4qWi1Vu50u9Zd0W5avLesqzqrMGEXFVSZbBY8ZJAFadmW6R3NcBV7S6fqCPc01v3OqQF306/+3cWPE1r+lvQACTwJ3VHpxnpGqPb+Ks/+K/3oD2IZhr9OwO0Kxd27LbVGLlvIbZ59KM0RB6Tq2UAA6q0wWRuVMR4QZAlgPKm1OPwT55MBWqwPQSvVguVsmZhW+qy1V7qi5p0QrpqkPFOxqthUspExcpVUKVKjhLfTh6pmnmlRwu30t1UzSmihC0tUd1QqJNFCFhammoA0TptQq4e0lxfJtyn5OjA/WR6UqEOo9hLq211V24dttbO1mmJYklVXzYlYgHv3kVzfSun3L9xbVpCznt2VRyzn+VR3NFrrNL30bmJMHUttmImBbB++rn9pbqo1vTrb0yNgi1uDsIjx3GJdj6yDk9qnnlorg1vbDX2rVm306wdy2W3XX/quAEFY89zMzcwdq8rjkBVYNS3VWeCXySNGaHV20V1uWVuBtpB3MjoV3ZRlBwd2QQQYHlQBNIGnQNR+rRbe1atraR8OQS9x152NcbhJAO1QoPeazQ39vl5UgKYigQ+6pb6rpqKOFvvKXvKqmmooQu95SNyqaeihCe6lUBSpUQxNKaRNKppcHmlTUpp0UFSpTSoCCp6QqQFMKIU9LFOIpkkIpEVI0pFEAhSqTCo0gJq1PVdSBpoB9tMVqwUitOBSqKfZVqiniiBSkpUYog1B6TQUqFKpA0qRRA0qVKoKGp6VKgBUqVKgQ9PSpVSAVOtPSoQmMaalSpsESFMaVKmSI0jT0qQEkqRpUqoB6kKelTERNVNSpVLGiApUqVQUf//Z'alt=''></img>
      </div>
      <div className='right-Login'>
        <div><h1>Welcome Back</h1>
       <h5>Signin to your Account</h5></div>

       <form type="submit">
          <Box
            sx={{
              width: 350,
              maxWidth: "100%",
            }}
          >
            {" "}
            <input
              fullWidth
              label="Email"
              className="input"
              type={"email"}
              placeholder={"enter email id"}
              name="email"
              onChange={getdata}
            ></input>
          </Box>
          <Box
            sx={{
              width: 350,
              maxWidth: "100%",
            }}
          >
            <input
              fullWidth
              label="Password"
              type={"password"}
              className="input"
              placeholder={"enter password"}
              name="password"
              onChange={getdata}
            ></input>
          </Box>

          <button type="submit" onClick={addData} variant="outlined">
            {" "}
            Login
          </button>
        </form>
    



<Link to={"/CreateAccount"} style={{color:"white",marginLeft:"200px"}}>Signin!</Link>

  
       
      </div>
    </div>
  )
}

export default Login