using System;
using System.Collections.Generic;
using System.Collections.Specialized;
using System.IO;
using System.Linq;
using System.Net;
using System.Runtime.Serialization;
using System.ServiceModel;
using System.Text;
using System.Web;

namespace RESTApp1
{
    public class ReservationService : IReservationService
    {
        //IMPLEMENTATION OF ALL WEB METHODS SPECIFIED IN THE SERVICE CONTRACT
        ReservationDBContext ReservationDbcontext = new ReservationDBContext();
        public List<tblreservation> ViewReservations()
        {
            return ReservationDbcontext.tblreservations.ToList();            
        }

        public tblreservation ViewReservation(string Id)
        {
            int QString = Int32.Parse(Id); 
            return ReservationDbcontext.tblreservations.Single(x => x.id == QString);            
        }

        //public void CreateReservation(Stream res) 
        //{
        //    Dictionary<string, string> postParams = new Dictionary<string, string>();
        //    string result = new StreamReader(res).ReadToEnd();
        //    char[] charstoTrim = { '{', '}','"'};
        //    string trimmed_result = result.Trim(charstoTrim);
        //    string[] rawParams = trimmed_result.Split(',');
        //    foreach (string rawParam in rawParams)
        //    {
        //        string[] kvPair = rawParam.Split(':');
        //        string key = kvPair[0];
        //        string value = HttpUtility.UrlDecode(kvPair[1]);
        //        postParams.Add(key, value);
        //    }

        //    ReservationDbcontext.spAddReservation(postParams["name"], postParams["phonenumber"], postParams["email"], postParams["date"], postParams["time"], int.Parse(postParams["partysize"]),postParams["specialnotes"]);
        //    ReservationDbcontext.SaveChanges();
        //    //NameValueCollection nvc = HttpUtility.ParseQueryString(result);
        //    //ReservationDbcontext.spAddReservation(nvc["name"].ToString(), nvc["email"].ToString(), nvc["phonenumber"].ToString(), nvc["date"].ToString(), nvc["time"].ToString(), int.Parse(nvc["partysize"]), nvc["specialnotes"].ToString());
        //    //return res.id;
        //}


        public string CreateReservation(Stream res)
        {
            string result = new StreamReader(res).ReadToEnd();
            NameValueCollection nvc = HttpUtility.ParseQueryString(result);
            return (ReservationDbcontext.spAddReservation(nvc["name"].ToString(), nvc["email"].ToString(), nvc["phonenumber"].ToString(), nvc["date"].ToString(), nvc["time"].ToString(), int.Parse(nvc["partysize"]), nvc["specialnotes"].ToString())).ToString();
            //ReservationDbcontext.SaveChanges();
            
        }


        public tblreservation ViewReservationDetail(Stream res)
        {
            string result = new StreamReader(res).ReadToEnd();
            NameValueCollection nvc = HttpUtility.ParseQueryString(result);
            int QString = int.Parse(nvc["id"]);
            return ReservationDbcontext.tblreservations.Single(x => x.id == QString);
        }

        public int CreateReservation_AutoAssignOff(tblreservation res, string tableno)
        {
            int tbleno = int.Parse(tableno);
            ReservationDbcontext.spAddReservation_AutoAssignOff(res.name, res.email, res.phonenumber, res.date, res.time, res.partysize, res.specialnotes, tbleno);
            return res.id;
        }

        public int UpdateReservation(tblreservation res, string id) 
        {
            int ID = int.Parse(id);
            ReservationDbcontext.spUpdateReservation(ID, res.name, res.email, res.phonenumber, res.date, res.time, res.partysize, res.specialnotes);
            ReservationDbcontext.SaveChanges();
            return ID;
        }

        public string CancelReservation(string id) 
        {
            int ID = int.Parse(id);
            var result = ReservationDbcontext.spCancelReservation(ID);
            ReservationDbcontext.SaveChanges();
            return result.ToString();
        }

        public List<tblProfile> ViewProfile()
        {
            return ReservationDbcontext.tblProfiles.ToList();
        }

        public string UpdateProfile(Stream prof)
        {

            string result = new StreamReader(prof).ReadToEnd();
            NameValueCollection nvc = HttpUtility.ParseQueryString(result);
           return ReservationDbcontext.spUpdateProfile(nvc["name"].ToString(), nvc["email"].ToString(), nvc["number"].ToString(), nvc["enable"].ToString(),nvc["address"].ToString(),nvc["timings"].ToString()).ToString();
           // ReservationDbcontext.SaveChanges();
          //  ReservationDbcontext.spUpdateProfile(prof.name, prof.email, prof.contactno, prof.autoassign, prof.RestaurantAddress, prof.timings);
           
        }

       
        public List<tbltable> Assign_table(string tableno, int id, string time)
        {
            int table = int.Parse(tableno);
            ReservationDbcontext.spAssigntable(table,time,id );
            return ReservationDbcontext.tbltables.ToList();       
        } 

        public string admin_login(string email, string password)
        {
            var result = ReservationDbcontext.spAuthenticateUser(email, password);
            return result.ToString();
        }


        public List<tblreservation> ViewContacts()
        {
            return ReservationDbcontext.tblreservations.Select(x => new tblreservation { name = x.name, email = x.email, phonenumber = x.phonenumber }).ToList(); 
        }

        public List<tbltable> ViewSeating()
        {
            return ReservationDbcontext.tbltables.ToList();
        }


        public List<spOpenSeating_Result> ViewOpenSeating()
        {
           return ReservationDbcontext.spOpenSeating().ToList();          
        }
    }
}

