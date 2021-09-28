﻿namespace Api
{
    public interface ICustomerRepository
    {
        Customer GetBy(string email);
        void Add(Customer customer);
        void SaveChanges();
    }
}