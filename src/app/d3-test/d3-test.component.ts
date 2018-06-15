import { ApiService } from './../api.service';

import { Component, OnInit } from '@angular/core';
import * as d3 from 'd3-collection';
import { HttpClient } from '@angular/common/http';
import { Http } from '@angular/http';
@Component({
  selector: 'app-d3-test',
  templateUrl: './d3-test.component.html',
  styleUrls: ['./d3-test.component.css']
})
export class D3TestComponent implements OnInit {

  constructor( private apiservice: ApiService, private httpClient: HttpClient, private http: Http) { }


  groupedArray: any[] = [];
  testArray1: any[] = [];
  // testArray2: any[] = [];
  // testArray3: any[] = [];
  someVar: any;
  data1:any;
  // someVar1:any;
  // someVar2:any;
  finalArray: any[] = [];
  mapTest: any;
  setTest: any;
  ngOnInit() {
   

    this.httpClient.get('https://api.myjson.com/bins/1fxrce').subscribe(
      data => {
        console.log(data); // using the HttpClient instance, http to call the API then subscribe to the data and display to console
        this.someVar = data;
        this.data1=data;
        // this.someVar1=data;
        // this.someVar2=data;


        //nests
        // d3.nest()
        // nest.key(key)
        // nest.sortKeys(comparator)
        // nest.sortValues(comparator)
        // nest.rollup(function)
        // nest.map(array)
        // nest.object(array)
        // nest.entries(array)
        this.testArray1 = d3.nest().key(function (d) {
          return d.year;
        }).key(function (d) { return d.variety; })
          .entries(this.someVar);
        console.log("here");
        //This returns a nested array. Each element of the outer array is a key-values pair, listing the values for each distinct key
        for (var j = 0; j < this.testArray1.length; j++) {
          console.log(this.testArray1[j]);
        }


        // this.testArray2 = d3.nest()
        //   .key(function (d) { return d.year; }).sortKeys(d3.ascending)
        //   .key(function (d) { return d.variety; }).sortKeys(d3.ascending)
        //   .entries(this.someVar1);
        // console.log("check here");
        // for (var j = 0; j < this.testArray2.length; j++) {
        //   console.log(this.testArray2[j]);
        // }


        // this.testArray3 = d3.nest()
        //   .key(function (d) { return d.year; }).sortValues(d3.ascending)
        //   .key(function (d) { return d.variety; }).sortValues(d3.ascending)
        //   .entries(this.someVar2);
        // console.log("check here 3");
        // for (var j = 0; j < this.testArray3.length; j++) {
        //   console.log(this.testArray3[j]);
        // }


        //maps
        this.mapTest = d3.map([{ name: "foo" }, { name: "bar" }], function (d) { return d.name; })
        //If object is specified, copies all enumerable properties from the specified object into this map
        this.mapTest.get("foo");
        console.log(this.mapTest.get("foo"));
        this.mapTest.has("foo");//Returns true if and only if this map has an entry for the specified key string
        console.log(this.mapTest.has("foo"));
        this.mapTest = d3.map()
          .set("foo", 1)
          .set("bar", 2)
          .set("baz", 3);
        this.mapTest.get("foo"); // 1
        console.log(this.mapTest.get("foo"));
        this.mapTest.remove("bar");
        console.log(this.mapTest);
        // this.mapTest.clear();
        // console.log(this.mapTest);
        this.mapTest.keys();
        console.log(this.mapTest);
        console.log(this.mapTest.values());
        console.log(this.mapTest.entries());
        console.log(this.mapTest.empty());
        console.log(this.mapTest.each(function (a, b) {
          return a + b;
        }))
        console.log(this.mapTest.size());







        //sets
        this.setTest = d3.set(["foo", "bar", "foo", "baz"]); // "foo", "bar", "baz"
        console.log(this.setTest.values());
        console.log(this.setTest.has("foo"));
        console.log(this.setTest.remove("bar"));//removes and returns true 
        console.log(this.setTest.values());
        // this.setTest.clear();
        console.log(this.setTest);
        console.log(this.setTest.each(function (a, b) {
          return a + b;
        }))
        console.log(this.setTest.empty());
        console.log(this.setTest.size());





        //Objects
        console.log(d3.keys(this.someVar));
        
        console.log(d3.values(this.someVar));
        
        console.log(d3.entries(this.someVar));
  //      


 //data[] has initial all employee data. Hence All Emails = emails.length
      //Below code groups data[] into groups based on organisation and stores it into groupedArray
      this.groupedArray = d3.nest()                //converts a flat Data Structure into a nested one
        .key(function (d) { return d.variety; })   //Key on which grouping should be done
        .rollup(function (d) { return d.length; })      //Get count instead of objects
        .entries(this.data1);                    //Specifies the input array
//.entries(this.someVar);

      for (var j = 0; j < this.groupedArray.length; j++) {
        console.log(this.groupedArray[j]);
      }

      })
  }

  
  
  



}
