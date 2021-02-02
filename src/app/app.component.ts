import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { TaskModel } from './task-model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'evenionassignment';
  isdefault: Boolean = true;
  isyeardefault:Boolean=true;
  task = new TaskModel();
  child1List1: TaskModel[] = [];
  child1List2: TaskModel[] = [];
  monthList: any = [];
  yearList: any = [];
  yearDefaultList: any[] = [
    { id: 1, year: 2010},
    { id: 2, year: 2011 },
    { id: 3, year: 2012 },
    { id: 4, year: 2013  },
    { id: 5, year: 2014 },
    { id: 6, year: 2015},
    { id: 7, year: 2016 },
    { id: 8, year: 2017 },
    { id: 9, year: 2018  },
    { id: 10, year: 2019 },
    { id: 11, year: 2020 }
  ];


  monthDefaultList: any[] = [
    { id: 1, month: "January", yearId: 3 },

    { id: 2, month: "Febuary", yearId: 4 },

    { id: 3, month: "March", yearId: 5 },

    { id: 4, month: "April", yearId: 6 },

    { id: 5, month: "May", yearId: 5 },

    { id: 6, month: "june", yearId: null },

    { id: 7, month: "July", yearId: null },

    { id: 8, month: "August", yearId: null },

    { id: 9, month: "September", yearId: null },

    { id: 10, month: "October", yearId: null },

    { id: 11, month: "November", yearId: null },

    { id: 12, month: "December", yearId: 3 }

  ];

  tableList1: any[] = [
    { monthId: 1, month: "January", yearId: 3,year:2012,price:"$400" },

    { monthId: 2, month: "Febraury", yearId: 4 ,year: 2013,price:"$900"},

    { monthId: 3, month: "March", yearId: 5 ,year: 2014,price:"$800"},

    { monthId: 4, month: "April", yearId: null,year: "N/a" ,price:"N/a"},

    { monthId: 5, month: "May", yearId: 5 ,year: 2014,price:"$920"},

    { monthId: 6, month: "june", yearId: null ,year: "N/a",price:"N/a" },

    { monthId: 7, month: "July",  yearId: null ,year: "N/a" ,price:"N/a" },

    { monthId: 8, month: "August", yearId: null ,year: "N/a" ,price:"N/a" },

    { monthId: 9, month: "September",  yearId: null ,year: "N/a" ,price:"N/a" },

    { monthId: 10, month: "October", yearId: null ,year: "N/a" ,price:"N/a" },

    { monthId: 11, month: "November",  yearId: null ,year: "N/a",price:"N/a"  },

    { monthId: 12, month: "December", yearId: null,year: "N/a" ,price:"N/a" }

  ];

  tableList2: any[] = [
    { monthId: 1, month: "January", yearId: 3,year:2012,price:"$400" },

    { monthId: 2, month: "Febuary", yearId: 4 ,year: 2013,price:"$600"},

    { monthId: 3, month: "March", yearId: null,year: "N/a",price:"N/a"},

    { monthId: 4, month: "April", yearId: 6,year: 2015,price:"$700"},

    { monthId: 5, month: "May", yearId: null,year: "N/a",price:"N/a"},

    { monthId: 6, month: "june", yearId: null ,year: "N/a",price:"N/a" },

    { monthId: 7, month: "July",  yearId: null ,year: "N/a",price:"N/a"  },

    { monthId: 8, month: "August", yearId: null ,year: "N/a",price:"N/a"  },

    { monthId: 9, month: "September",  yearId: null ,year: "N/a" ,price:"N/a" },

    { monthId: 10, month: "October", yearId: null ,year: "N/a" ,price:"N/a" },

    { monthId: 11, month: "November",  yearId: null ,year: "N/a" ,price:"N/a" },

    { monthId: 12, month: "December", yearId: 3,year:2012 ,price:"$390" }
  ];


  onYearChange(yearId: any) {
    this.monthList = [];
    this.isdefault = false;
    this.monthDefaultList.forEach(x => {
      if (x.yearId == yearId) {
        debugger
        this.monthList.push(x);
      }
    });



  }
  onMonthChange(monthId:number) {
    this.yearList = [];
    this.isyeardefault =false;
    if(monthId==1 || monthId==12)
    {
      this.yearList=[{ id: 3, year: 2012}];
      return;
    }
    if(monthId==3 || monthId==5)
    {
      this.yearList=[{ id: 5, year: 2014}];
      return;
    }
    if(monthId==2)
    {
      this.yearList=[{ id: 4, year: 2013}];
      return;
    }
    if(monthId==4)
    {
      this.yearList=[{ id: 6, year: 2015}];
      return;
    }
    
// debugger
//     this.yearDefaultList.forEach(y => {
//       for(var i=0;i<=this.yearDefaultList.length;i++)
//       {
//         for(var j=0;i<=this.yearDefaultList[i].monthId.length;i++)
//         {

//    if (this.yearDefaultList[i].monthId[j].mid == monthId) {
//         this.yearList.push(this.yearDefaultList[i]);
//       }
//         }
//   }
//   });
  }

  OnChangeForChildTable(taskForm:NgForm)
  {
    // this.child1List1=[];
    // this.child1List2=[];
    if(this.task.yearId && this.task.monthId)
    {
    this.tableList1.forEach(tab1=>
      {
        if(tab1.yearId==this.task.yearId && tab1.monthId==this.task.monthId)
        {
          this.child1List1.push(tab1);
        }
      });
      this.tableList2.forEach(tab2=>
        {
          if(tab2.yearId==this.task.yearId && tab2.monthId==this.task.monthId)
          {
            this.child1List2.push(tab2);
          }
        });
        taskForm.reset();
        this.isdefault=true;
        this.isyeardefault=true;
        this.yearList=[];
        this.monthList=[];
        return;
      }



      if(this.task.yearId && this.task.monthId==null)
    {
    this.tableList1.forEach(tab1=>
      {
        if(tab1.yearId==this.task.yearId )
        {
          this.child1List1.push(tab1);
        }
      });
      this.tableList2.forEach(tab2=>
        {
          if(tab2.yearId==this.task.yearId)
          {
            this.child1List2.push(tab2);
          }
        });
        taskForm.reset();
        this.isdefault=true;
        this.isyeardefault=true;
        this.yearList=[];
        this.monthList=[];
        return;
      }



      if(this.task.yearId==null && this.task.monthId)
    {
    this.tableList1.forEach(tab1=>
      {
        if(tab1.monthId==this.task.monthId )
        {
          this.child1List1.push(tab1);
        }
      });
      this.tableList2.forEach(tab2=>
        {
          if(tab2.monthId==this.task.monthId)
          {
            this.child1List2.push(tab2);
          }
        });
        taskForm.reset();    
        this.isdefault=true;
        this.isyeardefault=true;
        this.yearList=[];
        this.monthList=[];
        return;
      }
    
  }

}
